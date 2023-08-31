import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import View from './View'

class ChildApp extends HTMLElement {
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
          <View />
        </RecoilRoot>
      </React.StrictMode>,
    )
  }
}
// 定義新的元素
customElements.define('child-app-view2', ChildApp)
