import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const output = path.join(__dirname, '../backend/public')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: output 
  }
})
