import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    process: { env: {} }
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
      fileName: 'main'
    },
    minify: 'terser'
  }
  // build: {
  //   lib: {
  //     entry: 'src/main.tsx',
  //     formats: ['es'],
  //     fileName: 'index',
  //   }
  // },
})
