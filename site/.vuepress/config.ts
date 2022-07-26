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
      plugins: [vueJsx()],
      resolve: {
        alias: {
          "zodance-ui/style": resolve(__dirname, '../../packages/ui/src/style.ts'),
          "zodance-ui": resolve(__dirname, '../../packages/ui/src/index.ts')
        }
      },
      // 强制修改(vuepress暗黑模式是通过给html标签增加dark class实现的，我们这里处理less文件将html-dark-selector变量替换为html.dark)
      css: {
        preprocessorOptions: {
          less: {
            modifyVars: {
              "html-dark-selector": "~'html.dark'"
            }
          }
        }
      },
    },
    vuePluginOptions: {},
  }),
})