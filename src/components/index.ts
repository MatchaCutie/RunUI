import Button from './Button/src/index.vue'

// 按需引入
export { Button }

const components = [Button]

const RunUI = {
  install(App: any) {
    components.forEach((component) => {
      App.component(component.name, component)
    })
  }
}

export default RunUI
