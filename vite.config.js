import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true,
    proxy: {
      '/socket': {
        target: 'wss://cloudlessv.netlify.app/',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/socket/, ''),
      },
      '/api': {
        target: 'https://cloudlessv.netlify.app/.netlify/functions',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
