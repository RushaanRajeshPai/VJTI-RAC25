import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Ensure the build output goes to the "dist" directory for Vercel
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    // Add more manual chunks as needed
                },
            },
        },
        chunkSizeWarningLimit: 1000, // Set a warning limit for chunk sizes in KB
    },
    optimizeDeps: {
        exclude: ['.jpg', '.png', '.jpeg', '.gif'], // Exclude image files from optimization
    },
    assetsInclude: ['**/*.JPG'], // Include uppercase JPG files as assets
});

