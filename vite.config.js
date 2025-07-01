import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetUno()], // 使用默认预设
      // presets: [], // 使用默认预设
      theme: {
        // 自定义主题颜色   // [主题约定]-[颜色约定]  颜色枚举：primary | info | warning | danger | success
        bg_colors: {
          primary: '#5a9cf8',
          success: '#a2d380',
          warn: '#dca550',
          danger: '#e47470',
          info: '#919398',
        },
        txt_colors: {
          primary: '#606266',
          white: '#ffffff',
        }
      },
      // 自定义规则
      rules: [
        ['m-1', { margin: '0.25rem' }],
        [
          /^bg-(.*)$/,
          ([, c], { theme }) => {
            if (theme.bg_colors[c]) {
              return { background: theme.bg_colors[c] }
            }
          }
        ],
        [
          /^txt-(.*)$/,
          ([, c], { theme }) => {
            if (theme.txt_colors[c]) {
              return { color: theme.txt_colors[c] }
            }
          }
        ]
      ],
      shortcuts: [
        // 这里可以配合主题定义来用
        [/^btn-(.*)$/, ([, c]) => `bg-${c} txt-white py-2 px-4 rounded-lg`], // 各种主题的button
        { 'card': 'w-full h-full p-4 bg-white rounded-md shadow-md' }
      ]
    }),
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
