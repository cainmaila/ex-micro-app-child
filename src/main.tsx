import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import css from './app.postcss?inline'
import css2 from './app2.postcss?inline'

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
        <App />
      </React.StrictMode>,
    )
  }
}
// 定義新的元素
customElements.define('child-app', ChildApp)
