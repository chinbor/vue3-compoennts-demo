import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index',
  ],
  // Generates .d.ts declaration file
  declaration: true,
  rollup: {
    // 生成commonjs
    emitCJS: true,
    inlineDependencies: true,
  },
  clean: true,
})
