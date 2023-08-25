import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: "esbuild",
        lib: {
            entry: resolve(__dirname, "lib/index.ts"),
            name: "alpha-ui",
            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
            output: {
                exports: "named",
                globals: {
                    react: "React",
                }
            },
        },
    },
    plugins: [react(), dts({ include: "lib" })],
})
