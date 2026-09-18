import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { CONTACT } from '../data/artworks'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/92 shadow-[0_10px_40px_-18px_rgba(26,21,18,0.45)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'rgba(250,247,241,0.94)' } : {}}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Akash Art Gallery — Home">
          <span
            className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border transition ${
              scrolled ? 'border-gold/50 bg-white' : 'border-white/40 bg-white/10 backdrop-blur'
            }`}
          >
            <img src="/images/logo.png" alt="Akash Art Gallery logo" className="h-8 w-8 object-contain" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-lg sm:text-xl font-semibold tracking-wide transition ${
                scrolled ? 'text-charcoal' : 'text-ivory'
              }`}
            >
              AKASH ART GALLERY
            </span>
            <span
              className={`text-[10px] uppercase tracking-widest2 transition ${
                scrolled ? 'text-gold-dark' : 'text-gold-light'
              }`}
            >
              Where Art Meets Emotion
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-[13px] font-medium uppercase tracking-[0.18em] transition ${
                scrolled ? 'text-charcoal/80 hover:text-charcoal' : 'text-ivory/85 hover:text-ivory'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={`tel:${CONTACT.phone1Intl}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] text-white shadow-lg shadow-gold/30 transition hover:bg-gold-dark hover:shadow-gold/40"
          >
            <Phone size={15} />
            Enquire
          </a>
        </nav>

        <button
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            scrolled ? 'border-charcoal/15 text-charcoal' : 'border-white/30 text-ivory'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {scrolled && <div className="gold-rule opacity-60" />}

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gold/20 bg-charcoal/97 backdrop-blur-xl lg:hidden"
            style={{ backgroundColor: 'rgba(26,21,18,0.97)' }}
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-lg px-3 py-3 font-serif text-2xl text-ivory/90 transition hover:bg-white/5 hover:text-gold-light"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={`tel:${CONTACT.phone1Intl}`}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white"
              >
                <Phone size={16} />
                Call {CONTACT.phone1}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
