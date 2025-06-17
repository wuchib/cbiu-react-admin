import presetIcons from '@unocss/preset-icons'
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    presets: [
        presetIcons()
    ],
    transformers: [
        transformerDirectives()
    ],
})