import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Bundle analysis (only when ANALYZE=true)
        process.env.ANALYZE === 'true' && visualizer({
          open: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          brotliSize: true,
        }),
      ].filter(Boolean),
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Minification with Terser
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs in production
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
          },
        },
        // Optimize chunk splitting
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Separate vendor chunks for better caching
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                  return 'react-vendor';
                }
                if (id.includes('swiper')) {
                  return 'swiper-vendor';
                }
                if (id.includes('embla-carousel')) {
                  return 'embla-vendor';
                }
                if (id.includes('lucide-react')) {
                  return 'icons-vendor';
                }
                // Other vendor code
                return 'vendor';
              }
            },
            // Optimize chunk file names
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        // Increase chunk size warning limit (we're splitting manually)
        chunkSizeWarningLimit: 1000,
        // Source maps disabled for production (enable if needed for debugging)
        sourcemap: false,
        // Inline assets smaller than 4KB
        assetsInlineLimit: 4096,
        // CSS code splitting
        cssCodeSplit: true,
      },
      // Optimize dependencies pre-bundling
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
        exclude: ['swiper'], // Let Swiper be code-split
      },
    };
});
