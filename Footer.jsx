import { Phone, Mail, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react'
import { CONTACT } from '../data/artworks'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Collection', href: '#collection' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: Instagram, label: 'Instagram (coming soon)', href: '#' },
  { icon: Facebook, label: 'Facebook (coming soon)', href: '#' },
  { icon: Youtube, label: 'YouTube (coming soon)', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#12100E] text-ivory" aria-label="Footer">
      <div className="gold-rule" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-white/5">
                <img src="/images/logo.png" alt="Akash Art Gallery logo" className="h-9 w-9 object-contain" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold tracking-wide">AKASH ART GALLERY</span>
                <span className="mt-1 text-[10px] uppercase tracking-widest2 text-gold-light">
                  Where Art Meets Emotion
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-ivory/60">
              Original handmade artworks — straw mosaics, palm-leaf craft, charcoal portraits
              and folk paintings, created with passion in India.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  onClick={(e) => s.href === '#' && e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory/70 transition hover:border-gold hover:bg-gold hover:text-white"
                >
                  <s.icon size={18} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-medium uppercase tracking-widest2 text-gold-light">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href + n.label}>
                  <a
                    href={n.href}
                    className="text-[15px] font-light text-ivory/70 transition hover:text-gold-light"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Collection */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest2 text-gold-light">Collection</h3>
            <ul className="mt-5 space-y-3">
              {['Portraits', 'Paintings', 'Traditional Art', 'Abstract Art', 'Handmade Art'].map((c) => (
                <li key={c}>
                  <a
                    href="#collection"
                    className="text-[15px] font-light text-ivory/70 transition hover:text-gold-light"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest2 text-gold-light">Contact</h3>
            <ul className="mt-5 space-y-3.5 text-[15px] font-light text-ivory/70">
              <li>
                <a href={`tel:${CONTACT.phone1Intl}`} className="flex items-center gap-2.5 transition hover:text-gold-light">
                  <Phone size={15} className="text-gold" /> {CONTACT.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone2Intl}`} className="flex items-center gap-2.5 transition hover:text-gold-light">
                  <Phone size={15} className="text-gold" /> {CONTACT.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 break-all transition hover:text-gold-light">
                  <Mail size={15} className="shrink-0 text-gold" /> {CONTACT.email}
                </a>
              </li>
            </ul>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-gold-light hover:text-charcoal"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-[13px] font-light tracking-wide text-ivory/50">
            © 2026 Akash Art Gallery. All Rights Reserved.
          </p>
          <p className="font-serif text-sm italic text-ivory/40">
            Handcrafted with passion, one artwork at a time.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory/70 transition hover:border-gold hover:bg-gold hover:text-white"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
