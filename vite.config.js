import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-tasks/',  // Asegúrate de que esto coincide con el subdirectorio de tu aplicación
  plugins: [react()],
  build: {
    outDir: 'dist',  // o el directorio que estés utilizando para la construcción
  },
});