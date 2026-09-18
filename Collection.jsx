import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { ARTWORKS, CATEGORIES } from '../data/artworks'

export default function Collection({ onView }) {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? ARTWORKS : ARTWORKS.filter((a) => a.category === active)

  return (
    <section id="collection" className="relative bg-cream py-24 sm:py-32" aria-label="Art collection">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Curated Selection"
          title="Explore Our Collection"
          subtitle="Portraits, folk paintings, straw mosaics and handmade creations — each piece original, each story personal."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3" role="tablist" aria-label="Filter artworks by category">
          {CATEGORIES.map((c) => {
            const isActive = c === active
            return (
              <button
                key={c}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                  isActive
                    ? 'bg-charcoal text-ivory shadow-lg'
                    : 'border border-charcoal/15 bg-white/60 text-charcoal/70 hover:border-gold hover:text-gold-dark'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        <p className="mt-6 text-center text-xs uppercase tracking-[0.22em] text-charcoal/45" aria-live="polite">
          Showing {filtered.length} {filtered.length === 1 ? 'artwork' : 'artworks'}
        </p>

        {/* Grid */}
        <motion.div layout className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((art, i) => (
              <motion.article
                layout
                key={art.id}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_-24px_rgba(26,21,18,0.4)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-24px_rgba(138,111,62,0.55)]"
              >
                <div
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => onView(art, filtered)}
                  data-cursor
                >
                  <img
                    src={art.image}
                    alt={`${art.title} — ${art.medium}`}
                    loading="lazy"
                    className="h-80 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-charcoal backdrop-blur">
                    {art.category}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-center gap-2 pb-6 text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] shadow-lg">
                      <Eye size={15} />
                      View Artwork
                    </span>
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl leading-snug text-charcoal transition-colors group-hover:text-gold-dark">
                    {art.title}
                  </h3>
                  <p className="mt-1.5 text-sm italic text-charcoal/50">{art.medium}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-4">
                    <button
                      onClick={() => onView(art, filtered)}
                      className="text-[12px] font-medium uppercase tracking-[0.18em] text-gold-dark transition hover:text-charcoal"
                    >
                      View Details
                    </button>
                    <span className="h-px flex-1 mx-4 bg-gradient-to-r from-gold/40 to-transparent" />
                    <Eye size={16} className="text-gold" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
