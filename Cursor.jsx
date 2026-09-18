import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100
    let raf = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = `${mx}px`
      dot.style.top = `${my}px`
      const t = e.target
      const interactive =
        t?.closest?.('a, button, [data-cursor], img, select, input, textarea')
      ring.classList.toggle('is-hovering', !!interactive)
    }

    const loop = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      ring.style.left = `${rx}px`
      ring.style.top = `${ry}px`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden />
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden />
    </>
  )
}
