import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { CONTACT } from '../data/artworks'

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items?.[index]

  const prev = useCallback(() => {
    if (!items?.length) return
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items, onNavigate])

  const next = useCallback(() => {
    if (!items?.length) return
    onNavigate((index + 1) % items.length)
  }, [index, items, onNavigate])

  useEffect(() => {
    if (!item) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose, prev, next])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Artwork preview: ${item.title}`}
        >
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-ivory transition hover:bg-gold hover:border-gold"
          >
            <X size={20} />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                aria-label="Previous artwork"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-ivory transition hover:bg-gold hover:border-gold"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                aria-label="Next artwork"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-ivory transition hover:bg-gold hover:border-gold"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <motion.figure
            key={item.id + index}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-ivory shadow-2xl md:grid-cols-[1.25fr_1fr]"
          >
            <div className="flex items-center justify-center bg-charcoal p-4 sm:p-6">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[42vh] md:max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-xl"
              />
            </div>
            <figcaption className="flex flex-col justify-center gap-3 p-6 sm:p-10 overflow-y-auto">
              <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-dark">
                {item.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
                {item.title}
              </h3>
              <p className="text-sm italic text-charcoal/55">{item.medium}</p>
              <div className="gold-rule my-1" />
              <p className="text-[15px] font-light leading-relaxed text-charcoal/75">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-ivory transition hover:bg-gold"
                >
                  <MessageCircle size={16} />
                  Enquire on WhatsApp
                </a>
                {items.length > 1 && (
                  <span className="text-xs tracking-widest text-charcoal/50">
                    {index + 1} / {items.length}
                  </span>
                )}
              </div>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
