import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@src': '/src',
      '@styles': '/src/styles',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@data': '/src/data',
    },
  },
})
