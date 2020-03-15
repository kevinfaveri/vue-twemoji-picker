/* eslint-disable */
import pick from 'lodash.pick';

export const propsForMixin = {
  methods: {
    propsFor(componentName: string, props = this.$props) {
      const cTor = this.$options.components[componentName]
      if (cTor) {
        const propOptions = cTor.cid && typeof cTor === 'function'
          ? cTor.options.props
          : cTor.props
        const keys = Object.keys(propOptions)
        return pick(props, keys)
      } else {
        return {}
      }
    }
  }
}