import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@c': path.resolve('./src/components'),
      '@public': path.resolve('./public'),
      '@src': path.resolve('./src')
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
