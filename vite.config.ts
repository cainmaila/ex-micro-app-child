import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const base = '/ex-micro-app-child/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  // build: {
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: `assets/[name].js`,
  //       chunkFileNames: `assets/[name].js`,
  //       assetFileNames: `assets/[name].[ext]`,
  //     },
  //   },
  // },
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
})
