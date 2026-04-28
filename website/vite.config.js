import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Setting base to the repository name for GitHub Pages deployment
  base: '/yozzie-academy/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        team: resolve(__dirname, 'team.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
});
