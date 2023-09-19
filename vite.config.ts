import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dtsPlugin({
      include: [
        'src/index/ts',
        'src/types',
        'src/components'
      ],
      exclude: ['node_modules'],
      outDir: 'dist',
      compilerOptions: {
        sourceMap: true
      },
      copyDtsFiles: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
