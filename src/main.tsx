import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

window.__CHILD_APP_ROOT__ = '/ex-micro-app-child'

class ChildApp extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    const shadow = this.attachShadow({ mode: 'open' })
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
