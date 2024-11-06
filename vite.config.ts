import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      utils: `${path.resolve(__dirname, './src/utilities/')}`,
      containers: path.resolve(__dirname, './src/containers'),
      shared: `${path.resolve(__dirname, './src/shared')}`,
      service: `${path.resolve(__dirname, './src/services')}`,
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
  },
  server: {
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  },
  css: {
    devSourcemap: true,
  },
});
