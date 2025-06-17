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
      theme: {
        // 自定义主题颜色   // [主题约定]-[颜色约定]  颜色枚举：primary | info | warning | danger | success
        light: {  // 命名空间
          primary: '#5bab70', //0-背景颜色 1-字色 2-圆角 3-内边距
          info: '#3f7ee8',
        },
        dark: {  
          primary: '#86dfba',
        }
      },
      // theme: {
      //   // ...
      //   colors: {
      //     'veryCool': '#0000ff', // class="text-very-cool"
      //     'brand': {
      //       'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
      //     }
      //   },
      // },
      // 自定义规则
      rules: [
        ['m-1', { margin: '0.25rem' }],
        [
          /^textwcb-(.*)$/, // textwcb-primary  textwcb-info
          (a,b) => { 
            // [,c]
            console.log(a,'👻👻👻👻');
            console.log(b,'😳😳😳😳');
            const [,c] = a
            const { theme } = b
            if (theme.light[c]) {
              // console.log(theme.light[c], '😮😮😮');
              // console.log(obj, '💯💯💯💯');
              return { color: theme.light[c] }
            }
          }
        ]
      ],
      shortcuts: [
        {
          btn: 'py-2 px-4 font-semibold rounded-lg shadow-md', // 普通按钮
        },
        [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`] // 各种主题的button
      ]
    }),
  ],
})
