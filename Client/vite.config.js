import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://wealth-wave-tracker-server.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
