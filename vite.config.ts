import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: path.resolve(__dirname, 'src')
      },
      { find: /^~/, replacement: '' },
    ]
  },
  plugins: [react()]
})
