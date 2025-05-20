import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // <== ОБОВ’ЯЗКОВО для деплою з main
  plugins: [react()],
});
