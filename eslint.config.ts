import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
export default defineConfig([
    tseslint.configs.recommended,
    eslintPluginAstro.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: globals.browser,
        },
        ignores: [
            "./astro/*",
            "./dist/*",
            "./node_modules/*",
            ".env.example",
            "ecosystem.config.cjs",
            "config-overrides.js",
        ],
    },
]);
