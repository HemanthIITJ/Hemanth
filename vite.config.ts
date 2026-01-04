/* 
 * VITE CONFIGURATION - PRODUCTION-GRADE BUILD OPTIMIZATION
 * 
 * Build Strategy:
 * - Manual chunk splitting: vendor (React), components, utils
 * - Terser minification: mangle + compress
 * - Asset inlining threshold: 4KB (balance between requests and bundle size)
 * - CSS code splitting: per-component isolation
 * 
 * Performance Targets:
 * - Vendor chunk < 50KB gzipped
 * - Component chunk < 80KB gzipped
 * - Total bundle < 150KB gzipped
 * 
 * Path Aliases:
 * - Configured for clean imports without relative paths
 * - TypeScript integration via tsconfig.json paths
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@types': path.resolve(__dirname, './src/types'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@data': path.resolve(__dirname, './src/data'),
            '@styles': path.resolve(__dirname, './src/styles'),
        },
    },

    build: {
        target: 'es2020',
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info'],
                passes: 2,
            },
            mangle: {
                safari10: true,
            },
        },

        cssCodeSplit: true,

        rollupOptions: {
            output: {
                manualChunks: {
                    /* React vendor chunk - isolated for long-term caching */
                    'vendor-react': ['react', 'react-dom'],

                    /* Component chunk - UI components grouped */
                    'components': [
                        './src/components/organisms/Hero.tsx',
                        './src/components/organisms/Experience.tsx',
                        './src/components/organisms/Projects.tsx',
                        './src/components/organisms/Skills.tsx',
                        './src/components/organisms/TechnicalDeepDive.tsx',
                        './src/components/organisms/Contact.tsx',
                    ],

                    /* Utilities chunk - pure functions, minimal size */
                    'utils': [
                        './src/utils/particles.ts',
                        './src/utils/easing.ts',
                        './src/utils/math.ts',
                    ],
                },

                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            },
        },

        assetsInlineLimit: 4096,

        chunkSizeWarningLimit: 500,

        reportCompressedSize: true,

        sourcemap: false,
    },

    server: {
        port: 3000,
        strictPort: false,
        host: true,
        open: true,
    },

    preview: {
        port: 4173,
        strictPort: true,
        host: true,
        open: true,
    },
});
