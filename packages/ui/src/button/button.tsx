import { defineComponent } from 'vue'
import { isString } from '@zodance/utils'

export default defineComponent({
  name: 'ZdButton',
  setup() {
    return () => {
      return (<button>{isString('我是按钮') ? 'chinbor' : 'fuck'}</button>)
    }
  },
})
