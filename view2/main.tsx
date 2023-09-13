import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import View from './View'

class ChildApp extends HTMLElement {
  // 監聽屬性變化
  static get observedAttributes() {
    return ['my-name']
  }
  constructor() {
    super()
    this.render()
  }
  render() {
    const shadow = this.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    shadow.appendChild(style)
    const root = document.createElement('div')
    shadow.appendChild(root)
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RecoilRoot>
          <View root={this} />
        </RecoilRoot>
      </React.StrictMode>,
    )
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'my-name':
        this.dispatchEvent(createEvent(name, { oldValue, newValue }))
    }
  }
}
// 定義新的元素
customElements.define('child-app-view2', ChildApp)

function createEvent<T>(name: string, detail: T) {
  return new CustomEvent(name, { detail })
}
