import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
    build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), 
      name: "i-modal-vue", 
      fileName: (format) => `i-modal-vue.${format}.js`
    }, 
    rollupOptions: {
      external: ["vue"], 
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue(),  dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json'
    }),],
})
