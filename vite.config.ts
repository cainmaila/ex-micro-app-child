import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssNesting from 'postcss-nesting'
import cssnano from 'cssnano'

const base = '/ex-micro-app-child/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      output: {
        entryFileNames: 'assets/[name].[ext]',
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcssNesting, cssnano],
    },
  },
})
