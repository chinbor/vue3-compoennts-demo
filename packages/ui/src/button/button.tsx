import { type PropType, computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ZdButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary'>,
      default: 'default',
    },
  },
  setup(props, { slots }) {
    const prefixCls = 'zo-button'
    const cls = computed(() => ({
      [prefixCls]: true,
      [`${prefixCls}-${props.type}`]: props.type !== 'default',
    }))

    return () => {
      return (<button class={cls.value}>{ slots.default && slots.default() }</button>)
    }
  },
})
