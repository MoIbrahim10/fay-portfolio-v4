import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fay-portfolio-v4/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
