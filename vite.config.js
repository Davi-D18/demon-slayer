import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@c': path.resolve('./src/components'),
      '@public': path.resolve('./public')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve('src/styles/_variables.scss')}" as *;`
      }
    }
  }
})
