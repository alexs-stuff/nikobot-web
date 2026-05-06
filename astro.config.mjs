// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    output: "server",

    server: {
        allowedHosts: [
            "nikobot.alex427.com",
            "*.nikobot.alex427.com",
            "nikobot.local",
            "*.nikobot.local",
        ],
    },

    integrations: [icon(), react()],
    redirects: {
        "/commands/": "/cmds/",
        "/donate/": "https://ko-fi.com/al_ex427/",
    },

    adapter: node({
        mode: "standalone",
    }),
});
