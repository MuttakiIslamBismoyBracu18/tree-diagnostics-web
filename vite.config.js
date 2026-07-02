import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',                        // relative paths → works from any host/subfolder or file server
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      filename: 'sw.js',
      workbox: {
        globPatterns: ['**/*.{js,css,html,wasm,onnx,json,png,woff2}'],
        maximumFileSizeToCacheInBytes: 60 * 1024 * 1024,   // allow the ~17MB model
        runtimeCaching: [{
          urlPattern: /\.(?:onnx|wasm)$/,
          handler: 'CacheFirst',
          options: { cacheName: 'models', expiration: { maxEntries: 10 } }
        }]
      },
      includeAssets: ['models/*.onnx', 'models/*.json', 'icon-*.png'],
      manifest: false                // we ship our own manifest.webmanifest
    })
  ],
  optimizeDeps: { exclude: ['onnxruntime-web'] },
  build: { chunkSizeWarningLimit: 4000 }
})
