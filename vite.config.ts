import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssNesting from 'postcss-nesting'
import cssnano from 'cssnano'
import cesium from 'vite-plugin-cesium'
import { resolve } from 'path'

const base = '/ex-micro-app-child/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  base,
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'allow-extension',
      input: {
        index: resolve(__dirname, 'index.html'),
        view2: resolve(__dirname, 'view2/index.html'),
        gis: resolve(__dirname, 'gis/index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  css: {
    postcss: {
      plugins: [postcssNesting, cssnano],
    },
  },
  define: {
    __APP_BASE__: JSON.stringify(base),
  },
})
