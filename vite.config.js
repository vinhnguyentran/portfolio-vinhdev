import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vite from "@tailwindcss/vite"
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   }
  // }
})
