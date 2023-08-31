import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import View from './View'
import './index.css'
import css from './main.css?inline'
import { StrictMode } from 'react'

class GisApp extends HTMLElement {
  constructor() {
    super()
    this.render()
  }
  render() {
    const shadow = this.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    style.textContent = css
    shadow.appendChild(style)
    const root = document.createElement('div')
    shadow.appendChild(root)
    ReactDOM.createRoot(root).render(
      <StrictMode>
        <RecoilRoot>
          <View />
        </RecoilRoot>
      </StrictMode>,
    )
  }
}
// 定義新的元素
customElements.define('gis-view', GisApp)
