import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Use URL paths without requiring an additional @types/node dependency.
const sourceUrl = new URL('./src', import.meta.url);
const sourcePath = decodeURIComponent(sourceUrl.pathname).replace(/^\/([A-Za-z]:\/)/, '$1');
const sourceAlias = sourceUrl.hostname ? `//${sourceUrl.hostname}${sourcePath}` : sourcePath;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH?.trim() || '/',
    resolve: {
      alias: { '@': sourceAlias },
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      sourcemap: false,
    },
  };
});
