import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import css from './app.postcss?inline'

class ChildApp extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    const shadow = this.attachShadow({ mode: 'open' })
    const root = document.createElement('div')
    shadow.appendChild(root)
    const style = document.createElement('style')
    style.textContent = css
    shadow.appendChild(style)
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
}
// 定義新的元素
customElements.define('child-app', ChildApp)
