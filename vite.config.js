import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        502: resolve(__dirname, 'src/pages/502/index.html'),
        1033: resolve(__dirname, 'src/pages/1033/index.html'),
      }
    }
  }
});