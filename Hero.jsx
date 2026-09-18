import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
import { HERO_SLIDES } from '../data/artworks'

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, 160])
  const contentY = useTransform(scrollY, [0, 800], [0, 90])
  const fade = useTransform(scrollY, [0, 600], [1, 0])

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 6000)
    return () => clearInterval(t)
  }, [])

  const words = ['Where', 'Art', 'Meets', 'Emotion']

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal" aria-label="Welcome">
      {/* Background slides with parallax + slow drift */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[slide].image}
              alt=""
              className="hero-drift h-full w-full object-cover"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-24"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 flex items-center gap-4 text-[11px] sm:text-xs font-medium uppercase tracking-widest2 text-gold-light"
          >
            <span className="h-px w-10 sm:w-14 bg-gold" />
            Akash Art Gallery
          </motion.p>

          <h1 className="font-serif font-medium text-ivory leading-[1.02] text-[13.5vw] sm:text-7xl lg:text-[5.6rem]">
            {words.map((w, i) => (
              <span key={w + i} className="inline-block overflow-hidden pb-1 pr-3 align-bottom">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${w === 'Emotion' ? 'italic text-gold-light' : ''}`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 max-w-xl text-base sm:text-xl font-light leading-relaxed text-ivory/80"
          >
            Discover beautiful artworks crafted with creativity, passion and imagination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#collection"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white shadow-xl shadow-gold/30 transition hover:bg-gold-dark"
            >
              Explore Gallery
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-ivory backdrop-blur transition hover:border-gold-light hover:text-gold-light"
            >
              <Phone size={16} />
              Contact Us
            </a>
          </motion.div>

          {/* Slide caption + dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="flex items-center gap-2.5">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === slide ? 'w-10 bg-gold-light' : 'w-4 bg-ivory/30 hover:bg-ivory/60'
                  }`}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={slide}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-xs uppercase tracking-[0.22em] text-ivory/60"
              >
                {HERO_SLIDES[slide].caption}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/60 transition hover:text-gold-light"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>

      {/* Bottom gold hairline */}
      <div className="absolute bottom-0 inset-x-0 gold-rule opacity-70" />
    </section>
  )
}
