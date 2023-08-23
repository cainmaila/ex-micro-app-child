import { useEffect } from 'react'
import css from './demo.postcss?inline'

export default function Demo() {
  useEffect(() => {
    const _t = setInterval(() => {
      window.postMessage({ type: 'Hello!', payload: 'Hello, I am child app!' })
    }, 1000)
    return () => {
      clearInterval(_t)
    }
  }, [])
  return (
    <>
      <style>{css}</style>
      <h2>I Am Child & lazy load component!</h2>
      <div className="t1">
        <div>T1</div>
        <div className="t2">T2</div>
      </div>
    </>
  )
}
