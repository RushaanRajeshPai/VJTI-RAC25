import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    // Add more manual chunks as needed
                },
            },
        },
        chunkSizeWarningLimit: 1000, // in kBs, adjust as needed
    },
    optimizeDeps: {
        exclude: ['/.jpg', '/.png', '/.jpeg', '/.gif'], // Exclude image files from optimization
    },
    assetsInclude: ['/*.JPG'], // Include uppercase JPG files as assets
});