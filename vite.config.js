import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site utilisateur GitHub Pages : servi à la racine du domaine
export default defineConfig({
  plugins: [react()],
  base: '/',
})
