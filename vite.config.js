import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/youtube-clone/', /* <-- ADD THIS LINE (Replace with your exact repo name) */
})