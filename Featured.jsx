import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BadgeCheck, MessageCircle } from 'lucide-react'
import { CONTACT, getArtwork } from '../data/artworks'

const art = getArtwork('straw-shivaji')

const DETAILS = [
  'Entirely hand-laid natural straw portrait',
  'Museum-style framed presentation',
  'A tribute to Chhatrapati Shivaji Maharaj',
]

export default function Featured({ onView }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 0.98])
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section
      id="featured"
      ref={ref}
      className="grain relative overflow-hidden bg-charcoal py-24 sm:py-32"
      aria-label="Featured artwork"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[26vw] leading-none text-ivory/[0.025]"
      >
        Masterpiece
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Artwork with scroll zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative cursor-pointer"
          onClick={() => onView(art, [art])}
          data-cursor
        >
          <div className="absolute -inset-4 rounded-[2rem] border border-gold/25" aria-hidden />
          <div className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-2xl" aria-hidden />
          <motion.div style={{ scale: imgScale, y: imgY }} className="relative overflow-hidden rounded-[1.6rem]">
            <img
              src={art.image}
              alt={`${art.title} — featured straw artwork`}
              loading="lazy"
              className="h-[440px] sm:h-[600px] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/15" />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-charcoal/70 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-light backdrop-blur">
              Click to view
            </span>
          </motion.div>
        </motion.div>

        {/* Info */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-gold-light"
          >
            <span className="h-px w-10 bg-gold" />
            Featured Artwork
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ivory"
          >
            {art.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 font-serif text-2xl italic leading-snug text-gold-light/90"
          >
            “Art is not just something we see — it is something we feel.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 text-base sm:text-lg font-light leading-relaxed text-ivory/70"
          >
            {art.description} Hundreds of straw strands come together to honour the courage,
            wisdom and spirit of a legend — a signature creation of Akash Art Gallery.
          </motion.p>

          <ul className="mt-7 space-y-3">
            {DETAILS.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="flex items-center gap-3 text-[15px] text-ivory/80"
              >
                <BadgeCheck size={18} className="shrink-0 text-gold" />
                {d}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#collection"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-white transition hover:bg-gold-light hover:text-charcoal"
            >
              View Collection
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ivory transition hover:border-gold-light hover:text-gold-light"
            >
              <MessageCircle size={16} />
              Enquire About This Piece
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
