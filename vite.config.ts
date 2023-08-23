import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssNesting from 'postcss-nesting'

const base = '/ex-micro-app-child/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
})
