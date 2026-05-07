import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pc1: resolve(__dirname, 'pages/pc1.html'),
                pc2: resolve(__dirname, 'pages/pc2.html'),
                pc3: resolve(__dirname, 'pages/pc3.html'),
                pc4: resolve(__dirname, './pages/pc4.html'),
                pc5: resolve(__dirname, './pages/practica5/pc5.html'),
            }
        }
    }
})