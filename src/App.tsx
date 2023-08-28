import { Suspense, lazy, useEffect } from 'react'
import axios from 'axios'
const Demo = lazy(() => import('./Demo'))
import './index.css'
import Chart from './Chart'

const url = new URL(import.meta.url)
console.info('我的資源入口:', url.host, url.port, url.hostname, url.pathname, url)

const APP_ROOT = window.__CHILD_APP_ROOT__ || '/ex-micro-app-child'
console.log('APP_ROOT:' + APP_ROOT)
const configUrl = import.meta.env.DEV ? `${APP_ROOT}/config.json` : `${APP_ROOT}/config.json`

function App() {
  useEffect(() => {
    axios.get(configUrl).then((res: { data: { myName?: string } }) => {
      const { data } = res
      console.log('Name:' + data?.myName)
    })
  }, [])
  return (
    <>
      <h1>Child App</h1>
      <div>
        <img src={`${APP_ROOT}/vite.svg`} alt="" />
      </div>
      <Chart></Chart>
      <Suspense fallback={<div>Loading....</div>}>
        <Demo></Demo>
      </Suspense>
    </>
  )
}

export default App
