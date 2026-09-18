import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { GALLERY_PREVIEW, getArtwork } from '../data/artworks'

const items = GALLERY_PREVIEW.map(getArtwork).filter(Boolean)

export default function Gallery({ onView }) {
  return (
    <section id="gallery" className="relative bg-ivory py-24 sm:py-32" aria-label="Gallery preview">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visual Journey"
          title="Gallery Preview"
          subtitle="A glimpse into our world of straw, charcoal, leaf and line — click any artwork to view it up close."
        />

        <div className="masonry mt-14">
          {items.map((art, i) => (
            <motion.figure
              key={art.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              onClick={() => onView(art, items)}
              data-cursor
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src={art.image}
                alt={`${art.title} — ${art.medium}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-charcoal/0 p-6 text-center opacity-0 transition-all duration-500 group-hover:bg-charcoal/60 group-hover:opacity-100">
                <span className="translate-y-3 text-[10px] font-medium uppercase tracking-widest2 text-gold-light transition-transform duration-500 group-hover:translate-y-0">
                  {art.category}
                </span>
                <span className="translate-y-3 font-serif text-2xl leading-tight text-ivory transition-transform duration-500 delay-75 group-hover:translate-y-0">
                  {art.title}
                </span>
                <span className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-gold text-white transition-transform duration-500 delay-150 group-hover:translate-y-0">
                  <Expand size={19} />
                </span>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-charcoal/10" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
