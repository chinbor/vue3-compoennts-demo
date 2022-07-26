import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    // 不生效的
    minify: false,
    // 不需要清空输入目录
    emptyOutDir: false,
    // 实际打包的rollup配置
    rollupOptions: {
      // 排除掉这些包的打入（因为我们的ui库需要使用的前置条件就是vue安装好了，同时@zodance/utils也安装好了）
      external: [
        'vue',
        '@zodance/utils',
      ],
      input: ['src/index.ts'],
      output: [
        // esm
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        // cjs
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    // 打包为lib库模式（只是指明打包模式为lib模式，实际打包在rollupOptions中配置）
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts(),
  ],
})
