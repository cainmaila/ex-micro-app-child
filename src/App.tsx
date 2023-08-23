import { Suspense, lazy, useEffect } from 'react'
import axios from 'axios'
const Demo = lazy(() => import('./Demo'))

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
      <Suspense fallback={<div>Loading....</div>}>
        <Demo></Demo>
      </Suspense>
    </>
  )
}

export default App
