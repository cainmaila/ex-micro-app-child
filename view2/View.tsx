import { useCallback } from 'react'

export default function View() {
  const composedOff = useCallback(() => {
    dispatchEvent(
      new CustomEvent('testEvent', {
        bubbles: true,
        composed: true,
        detail: { name: 'composed-Off' },
      }),
    )
  }, [])

  const composedOn = useCallback(() => {
    dispatchEvent(
      new CustomEvent('testEvent', {
        bubbles: true,
        composed: true,
        detail: { name: 'composed-On' },
      }),
    )
  }, [])

  return (
    <div>
      <h2>事件穿透實驗</h2>
      <div>
        <button onClick={composedOff}>不穿透</button>
      </div>
      <div>
        <button onClick={composedOn}>穿透</button>
      </div>
    </div>
  )
}
