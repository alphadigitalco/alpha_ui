import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

export default defineConfig({
    build: {
        minify: "esbuild",
        lib: {
            entry: resolve(__dirname, "lib/index.ts"),
            name: "alpha-ui",
            fileName: "index",
        },
        rollupOptions: {
            external: Object.keys(packageJson.peerDependencies || {}),
            output: {
                exports: "named",
                globals: {
                    react: "React",
                    "styled-components": "styledComponents",
                }
            },
        },
    },
    plugins: [react(), dts({ include: "lib" })],
})
