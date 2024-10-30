import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src/mobile'),
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, 'dist/mobile'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4000,
  },
});
