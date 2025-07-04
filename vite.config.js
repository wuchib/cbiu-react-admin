import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
// import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // 目标服务器地址
        changeOrigin: true, // 修改请求头中的 origin
        rewrite: (path) => path.replace(/^\/api/, ''), // 如果需要重写路径，去掉 /api 前缀
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
