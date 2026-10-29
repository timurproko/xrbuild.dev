import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  root: path.resolve(import.meta.dirname, 'src'),
  publicDir: path.resolve(import.meta.dirname, 'public'),
  base: '/',
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    assetsDir: 'assets/landing',
  },
});
