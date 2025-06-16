import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno()], // 使用默认预设
      // 自定义规则
      rules: [
        ['m-1', { margin: '0.25rem' }],
        ['text-brand', { color: '#1890ff' }]
      ]
    }),
  ],
})
