import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/static/',  // Esto especifica la base URL
  plugins: [react()],
  build: {
    outDir: 'dist',  // Coloca `index.html` aquí
    assetsDir: 'assets',  // Subdirectorio para JS/CSS/images
    emptyOutDir: true,
  },
});