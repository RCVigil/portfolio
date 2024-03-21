import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: { jsxFragment: 'Fragment' },
  plugins: [
    react(),
    // Sitemap()
  ],
  css: {
    sass: {
      additionalData: `@import 'src/Styles/variables.sass*';`
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Aumente o limite para 1000 kB
  },
})
