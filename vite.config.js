import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ["catchit-keval-1.onrender.com"],
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit (default is 500 KB)
  },
})
