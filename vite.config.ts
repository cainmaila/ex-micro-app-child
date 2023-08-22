import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const base = '/ex-micro-app-child/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `${base}assets/[name].js`,
        chunkFileNames: `${base}assets/[name].js`,
        assetFileNames: `${base}assets/[name].[ext]`,
      },
    },
  },
})
