import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),

    // تحليل حجم الملفات بعد Build
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  build: {
    target: 'es2020',

    // هذا فقط للتحكم في Warning
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        manualChunks: {
          react: [
            'react',
            'react-dom',
            'react-router-dom',
          ],

          supabase: [
            '@supabase/supabase-js',
          ],

          firebase: [
            'firebase',
          ],

          icons: [
            'lucide-react',
          ],

          documents: [
            'jspdf',
            'jspdf-autotable',
          ],

          excel: [
            'xlsx',
          ],
        },
      },
    },
  },
});