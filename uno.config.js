import { defineConfig, presetUno, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'


export default defineConfig({
    presets: [
        presetUno(),
        presetIcons(),
    ],
    transformers: [
        transformerDirectives() // 可以在css模块文件中使用指令
    ],
    rules: [
        // margin
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
        [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
        [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
        [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
        [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],

        // padding
        [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
        [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
        [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })],
        [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
        [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],

        // flex布局
        [
            /^flex-(row|col)-(start|center|end|between|around|evenly)-(start|center|end|stretch|baseline)$/,
            ([, direction, main, cross]) => {
                const justifyMap = {
                    start: 'flex-start',
                    center: 'center',
                    end: 'flex-end',
                    between: 'space-between',
                    around: 'space-around',
                    evenly: 'space-evenly',
                }

                const alignMap = {
                    start: 'flex-start',
                    center: 'center',
                    end: 'flex-end',
                    stretch: 'stretch',
                    baseline: 'baseline',
                }

                return {
                    display: 'flex',
                    'flex-direction': direction === 'row' ? 'row' : 'column',
                    'justify-content': justifyMap[main],
                    'align-items': alignMap[cross],
                }
            },
        ],

        // 字体
        [/^fs-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],

        // 字重
        // 数字权重，只允许有效数字
        [/^fw-(\d+)$/, ([, w]) => validWeights.has(w) ? { 'font-weight': w } : undefined],

        // 宽高百分百
        ['/^(w|h)-full$/', ([, wh]) => ({ [wh === 'h' ? 'height' : 'width']: '100%' })],

        // 颜色过渡
        ['transition-colors', { 'transition-duration': '.15s', 'transition-property': 'color, background-color, border-color, text-decoration-color, fill, stroke', 'transition-timing-function': 'cubic-bezier(.4,0,.2,1)' }],
        
        // 圆形圆角
        ['circle-radius', { 'border-radius': '50%' }],

        // 定位相关
        [/^position-(relative|absolute|fixed|static|sticky)$/, ([, d]) => ({ position: d })],
        [/^left-(\d+)/, ([, d]) => ({ left: `${d}px` })],
        [/^right-(\d+)/, ([, d]) => ({ right: `${d}px` })],
        [/^bottom-(\d+)/, ([, d]) => ({ bottom: `${d}px` })],
        [/^top-(\d+)/, ([, d]) => ({ top: `${d}px` })],
    ],
    shortcuts: [
        // icon-button：圆角 6px，宽高 32px，居中对齐
        ['icon-button', 'w-32px h-32px rounded-[6px] flex items-center justify-center ' +
            'hover:bg-[#f4f4f5] transition-colors cursor-pointer',],
    ],

})