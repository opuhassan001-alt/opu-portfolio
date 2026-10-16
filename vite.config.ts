/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('react-dom') || id.includes('react')) return 'vendor-react';
            if (id.includes('lucide-react')) return 'vendor-icons';
          }
          if (id.includes('megaFootballRegistry')) return 'data-mega-registry';
          if (id.includes('uclCompleteRegistry')) return 'data-ucl-registry';
          if (id.includes('fixturesData')) return 'data-fixtures';
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.{test,spec}.{ts,tsx}'],
    testTimeout: 15000,
  },
});
