import { resolve } from 'path'
import { defineUserConfig, defaultTheme, viteBundler } from 'vuepress'
// 作者的插件（可以详细读一读）
import { codeBlockPlugin } from '@yanyu-fe/vuepress-plugin-code-block'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'

export default defineUserConfig({
  base: process.env.NODE_ENV === 'production' ? '/vue3-components-demo/' : '/',
  lang: 'zh-CN',
  title: 'zodance-ui',
  description: 'zodance公司的组件库',
  head: [],
  plugins: [codeBlockPlugin()],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'zodance-ui'
    }
  },
  theme: defaultTheme({
    // https://v2.vuepress.vuejs.org/zh/guide/i18n.html
    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh
      }
    },
  }),
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "zodance-ui": resolve(__dirname, '../../packages/ui/src')
        }
      },
      plugins: [vueJsx()]
    },
    vuePluginOptions: {},
  }),
})