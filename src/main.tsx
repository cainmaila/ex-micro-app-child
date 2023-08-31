import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import css from './app.postcss?inline'
import css2 from './app2.postcss?inline'
import { RecoilRoot } from 'recoil'

class ChildApp extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    const shadow = this.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    style.textContent = css + css2
    shadow.appendChild(style)
    const root = document.createElement('div')
    shadow.appendChild(root)
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </React.StrictMode>,
    )
  }
}
// 定義新的元素
customElements.define('child-app', ChildApp)
