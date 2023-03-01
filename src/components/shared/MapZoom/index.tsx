import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'
import CardInfo from './CardInfo'

import CardMap from './CardMap'
import Controls from './Controls'
import LayoutSvg from './LayoutSvg'

const MapZoom = () => {
  const refZoom = useRef<ReactZoomPanPinchRef | null>(null)

  const refData = useRef<HTMLDivElement | null>(null)

  // estado para controlar el tamaño del fondo negro de la imagen pequeña del mapa
  const [sizeShadow, setSizeShadow] = useState(1)
  // estado para controlar el zoom

  const [translateXShawdow, setTranslateXShawdow] = useState(0)
  // console.log(scale)

  const stepUpSizeShadow = () => {
    if (sizeShadow === 4) return
    setSizeShadow((prev) => prev + 1)
  }
  const stepDownSizeShadow = () => {
    if (sizeShadow === 1) return
    setSizeShadow((prev) => prev - 1)
  }

  const translateX = (refZoom: ReactZoomPanPinchRef) => {
    if (sizeShadow <= 1) {
      setTranslateXShawdow(0)
      return
    }
    if (refZoom.state.positionX >= -131) {
      setTranslateXShawdow(refZoom.state.positionX)
    }
  }

  return (
    <>
      <div className="flex justify-center w-full h-full items-center   overflow-hidden">
        <div id="info-box" className="grid-cols-1 md:grid-cols-3 px-3 py-2 " ref={refData}></div>

        <div className="w-full h-full bg-white relative ">
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            ref={refZoom}
            maxScale={6}
            onPanning={(refZoom) => {
              translateX(refZoom)
            }}
            onZoom={(refZoom) => {
              setSizeShadow(Math.round(refZoom.state.scale))
            }}>
            {({ zoomIn, zoomOut, resetTransform, setTransform, zoomToElement, ...rest }) => {
              return (
                <>
                  {/* <CardMap
                    sizeShadow={sizeShadow}
                    translateXShawdow={translateXShawdow}
                  /> */}
                  <Controls
                    resetTransform={resetTransform}
                    setSizeShadow={setSizeShadow}
                    zoomIn={zoomIn}
                    zoomOut={zoomOut}
                    stepDownSizeShadow={stepDownSizeShadow}
                    stepUpSizeShadow={stepUpSizeShadow}
                  />

                  <TransformComponent>
                    <div className="w-full h-full flex justify-center items-center">
                      <LayoutSvg
                        sizeShadow={sizeShadow}
                        refData={refData}
                        setTransform={setTransform}
                        setSizeShadow={setSizeShadow}
                      />
                    </div>
                  </TransformComponent>
                  <CardInfo />
                </>
              )
            }}
          </TransformWrapper>
        </div>
      </div>
    </>
  )
}

export default MapZoom
