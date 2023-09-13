//事件範例

import { useCallback, MouseEvent, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { recoilState } from './recoil'

interface I_Props {
  root: HTMLElement
}

export default function View({ root }: I_Props) {
  const [text, setText] = useRecoilState<string>(recoilState)

  const composedOff = useCallback((e: MouseEvent<HTMLElement>) => {
    e.target.dispatchEvent(
      new CustomEvent('testEvent', {
        bubbles: true,
        composed: false, //事件不穿透
        detail: { name: 'composed-Off' },
      }),
    )
  }, [])

  const composedOn = useCallback((e: MouseEvent<HTMLElement>) => {
    e.target.dispatchEvent(
      new CustomEvent('testEvent', {
        bubbles: true,
        composed: true,
        detail: { name: 'composed-On' },
      }),
    )
  }, [])

  useEffect(() => {
    function handler(e: unknown) {
      const _e = e as CustomEvent
      setText(_e.detail.newValue)
    }
    setText(root.getAttribute('my-name') || '')
    root.addEventListener('my-name', handler)
    return () => {
      root.removeEventListener('my-name', handler)
    }
  }, [root, setText])

  return (
    <>
      <h2>事件穿透實驗</h2>
      <div>
        <button onClick={composedOff}>不穿透</button>
      </div>
      <div>
        <button onClick={composedOn}>穿透</button>
      </div>
      <h2>{text}</h2>
    </>
  )
}
