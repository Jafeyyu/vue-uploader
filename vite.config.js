import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import config from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'dist',
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'src/index',
      name: config.name,
      fileName: config.name
    }
  },
  define: {
    __VERSION__: `"${config.version}"`,
    'process.env': {
      NODE_ENV: '"development"'
    }
  },
  server: {
    port: 3001
  }
})
