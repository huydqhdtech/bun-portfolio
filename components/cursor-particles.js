"use client"
import { useEffect, useRef } from "react"

export default function CursorParticles() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    function resize() {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const particles = []

    function rand(a, b) {
      return a + Math.random() * (b - a)
    }

    function createParticle() {
      return {
        x: rand(0, window.innerWidth),
        y: rand(0, window.innerHeight),
        vx: rand(-0.4, 0.4), // di chuyển nhanh hơn
        vy: rand(-0.4, 0.4),
        r: rand(1, 2.5), // hạt nhỏ như sao
        alpha: rand(0.5, 1),
      }
    }

    for (let i = 0; i < 150; i++) particles.push(createParticle())

    function tick() {
      // Vẽ nền đen
      ctx.fillStyle = "rgba(0,0,0,0.8)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // trôi tự do
        p.vx += rand(-0.01, 0.01)
        p.vy += rand(-0.01, 0.01)

        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        // wrap around (nếu ra ngoài thì quay lại)
        if (p.x < 0) p.x = window.innerWidth
        if (p.x > window.innerWidth) p.x = 0
        if (p.y < 0) p.y = window.innerHeight
        if (p.y > window.innerHeight) p.y = 0

        // vẽ hạt
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3)
        g.addColorStop(0, `rgba(255,255,255,${p.alpha})`)
        g.addColorStop(0.6, `rgba(255,255,255,${p.alpha * 0.3})`)
        g.addColorStop(1, "rgba(255,255,255,0)")

        ctx.beginPath()
        ctx.fillStyle = g
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  )
}
