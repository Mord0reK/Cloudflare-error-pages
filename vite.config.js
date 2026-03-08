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
        1002: resolve(__dirname, 'src/pages/1002/index.html'),
        default: resolve(__dirname, 'src/pages/default/index.html'),
      }
    }
  }
});