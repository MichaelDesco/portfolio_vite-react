import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:[
      {
        find:'@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find:'@layout',
        replacement: path.resolve(__dirname, 'src/layout')
      },
      {
        find:'@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find:'@home-section',
        replacement: path.resolve(__dirname, 'src/pages/homeSections')
      },
    ]
  }
})
