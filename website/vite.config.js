import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/educational-Video-Games-Philosophy-/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
