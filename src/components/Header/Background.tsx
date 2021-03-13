import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Color from 'canvas-sketch-util/color'
import SimplexNoise from 'simplex-noise'

/**
 * Constraints
 */
const DOT_SIZE = 2
const DISTANCE = 30

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

const simplex = new SimplexNoise(Math.random)

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

const Canvas = styled.canvas`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`

/**
 * Main
 */
const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  const renderCanvas = useCallback((rangeX: number, rangeY: number) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return null

    const canvasSize = canvas.width
    const size = canvasSize / DISTANCE
    const arrayLength = new Array(Math.floor(size)).fill(' ')

    // Clean
    context.clearRect(0, 0, canvas.width, canvas.height)

    arrayLength.forEach((_, col) => {
      arrayLength.forEach((_, row) => {
        const seed = simplex.noise2D(
          (col * DISTANCE) / (canvasSize / 1.5) - rangeY / canvasSize,
          (row * DISTANCE) / (canvasSize / 1.5) - rangeX / canvasSize
        )

        context.restore()

        const colorRandom = lerp(-100, 100, Math.abs(seed))
        const alphaRandom = lerp(0.1, 0.4, Math.abs(seed))
        const xRandom = lerp(
          row * DISTANCE - 5,
          row * DISTANCE + 5,
          Math.abs(seed)
        )
        const yRandom = lerp(
          col * DISTANCE - 5,
          col * DISTANCE + 5,
          Math.abs(seed)
        )

        context.fillStyle = Color.offsetHSL('blue', 0, colorRandom, 0).hex
        context.globalAlpha = alphaRandom
        context.fillRect(xRandom, yRandom, DOT_SIZE, DOT_SIZE)

        context.save()
      })
    })

    return
  }, [])

  useEffect(() => {
    const callback = (event: PointerEventInit) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      renderCanvas(event.clientX!, event.clientY!)

    document.addEventListener('mousemove', callback)

    return () => {
      document.removeEventListener('mousemove', callback)
    }
  }, [renderCanvas])

  useEffect(() => {
    const setWindowSize = () =>
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight / 2,
      })
    setWindowSize()

    document.addEventListener('resize', setWindowSize)

    return () => {
      document.removeEventListener('resize', setWindowSize)
    }
  }, [])

  return (
    <Wrapper style={{ height: canvasSize.height }}>
      <Canvas
        width={canvasSize.width}
        height={canvasSize.height}
        ref={canvasRef}
      />
    </Wrapper>
  )
}

export { Background }
