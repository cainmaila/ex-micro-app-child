import { useLayoutEffect, useRef } from 'react'
import { Viewer, ShadowMode } from 'cesium'
import css from './View.postcss?inline'

export default function View() {
  const gisViewRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!gisViewRef.current) return
    const viewer = new Viewer(gisViewRef.current, {
      //   terrainProvider: createWorldTerrain(),
      animation: false,
      timeline: true,
      geocoder: true,
      homeButton: true,
      sceneModePicker: false,
      baseLayerPicker: true,
      navigationHelpButton: true,
      fullscreenButton: false,
      terrainShadows: ShadowMode.ENABLED,
      scene3DOnly: true,
      infoBox: false,
      selectionIndicator: false,
    })
    return () => {
      viewer?.destroy()
    }
  }, [])
  return (
    <>
      <style>{css}</style>
      <div className="GIS" ref={gisViewRef}></div>
    </>
  )
}
