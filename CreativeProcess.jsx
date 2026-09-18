import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { PROCESS_IMAGES } from '../data/artworks'

const STEPS = ['Imagine', 'Sketch', 'Craft', 'Detail', 'Present']

export default function CreativeProcess() {
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="process" className="relative overflow-hidden bg-sand/40 py-24 sm:py-32" aria-label="Creative process">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Behind The Canvas"
            title="From Imagination to Art"
            subtitle="Every artwork begins with an idea and evolves through creativity, patience and passion."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll process images left"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 bg-white text-charcoal transition hover:border-gold hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll process images right"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 bg-white text-charcoal transition hover:border-gold hover:bg-gold hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Steps */}
        <ol className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          {STEPS.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <span className="flex items-center gap-2.5 rounded-full bg-charcoal px-4 py-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-ivory">
                <span className="font-serif text-sm italic text-gold-light">0{i + 1}</span>
                {s}
              </span>
              {i < STEPS.length - 1 && <span className="hidden h-px w-6 bg-gold/50 sm:block" aria-hidden />}
            </motion.li>
          ))}
        </ol>

        {/* Horizontal image strip */}
        <div
          ref={trackRef}
          className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
        >
          {PROCESS_IMAGES.map((p, i) => (
            <motion.figure
              key={p.image + i}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.3) }}
              className="group relative w-[270px] sm:w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — artistic process at Akash Art Gallery`}
                  loading="lazy"
                  className="h-72 sm:h-80 w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-6 pt-16 text-left">
                <p className="font-serif text-sm italic text-gold-light">Step 0{i + 1}</p>
                <h3 className="mt-1 font-serif text-2xl text-ivory">{p.title}</h3>
                <p className="mt-1 text-sm font-light text-ivory/75">{p.text}</p>
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-charcoal">
                Handmade
              </span>
            </motion.figure>
          ))}

          {/* End card */}
          <a
            href="#contact"
            className="flex w-[240px] shrink-0 snap-start flex-col items-start justify-center gap-4 rounded-2xl bg-charcoal p-8 text-left transition hover:bg-espresso"
          >
            <span className="font-serif text-4xl italic text-gold-light">Your story,</span>
            <span className="font-serif text-4xl text-ivory">our next artwork.</span>
            <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-white">
              Commission a Piece
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
