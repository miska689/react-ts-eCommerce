import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
        { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
        { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
        { find: '@redux', replacement: path.resolve(__dirname, 'src/redux') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        { find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
        { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
    ],
  },
})
