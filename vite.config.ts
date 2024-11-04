import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react'
import process from "node:process";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react()],
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
