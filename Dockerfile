FROM oven/bun:latest AS base
WORKDIR /app/nikbot/web

# install all dependencies
FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# build the app
FROM base AS build
COPY --from=install /app/nikbot/web/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build


# final image - only dist + production deps
FROM base AS release
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production
COPY --from=build /app/nikbot/web/dist ./dist
COPY --from=build /app/nikbot/web/public/ ./public

USER bun
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321/tcp
ENTRYPOINT ["bun", "./dist/server/entry.mjs"]
