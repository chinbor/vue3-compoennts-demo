import type { App } from 'vue'
import * as components from './components'

// import { Button } from 'zodance-ui' (按需导入)
// const app = createApp()
// app.use(Button)
export * from './components'

// import zodanceUi from 'zodance-ui' （全局导入）
// const app = createApp()
// app.use内部会自动调用install方法
// app.use(zodanceUi)
export default {
  install(app: App) {
    for (const componentKey in components) {
      const comp = components[componentKey]

      comp.install && app.use(comp)
    }

    return app
  },
}
