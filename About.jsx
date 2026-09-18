import { motion } from 'framer-motion'
import { ArrowRight, Brush, Leaf, HandHeart } from 'lucide-react'
import SectionHeading from './SectionHeading'

const POINTS = [
  { icon: Brush, text: 'Original handcrafted pieces — no prints, no copies' },
  { icon: Leaf, text: 'Natural materials — straw, palm leaf, gourd & charcoal' },
  { icon: HandHeart, text: 'Traditional soul with a contemporary gallery finish' },
]

const STATS = [
  { value: '35+', label: 'Original Artworks' },
  { value: '06', label: 'Art Categories' },
  { value: '100%', label: 'Handcrafted' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-24 sm:py-32" aria-label="About Akash Art Gallery">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 select-none font-serif text-[22vw] leading-none text-charcoal/[0.035]"
      >
        Atelier
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="art-frame rounded-2xl"
            >
              <img
                src="/images/artist-frame.jpg"
                alt="Artist of Akash Art Gallery presented in a handmade straw frame"
                loading="lazy"
                className="h-[420px] sm:h-[520px] w-full rounded-xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="float-soft absolute -bottom-10 -right-3 sm:-right-8 w-40 sm:w-56 overflow-hidden rounded-2xl border-4 border-ivory shadow-2xl"
            >
              <img
                src="/images/portrait-shiva.jpg"
                alt="Charcoal portrait of Lord Shiva by Akash Art Gallery"
                loading="lazy"
                className="h-52 sm:h-72 w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute -top-6 -left-3 sm:-left-6 rounded-2xl bg-charcoal px-5 py-4 text-ivory shadow-xl"
            >
              <p className="font-serif text-3xl text-gold-light">Est.</p>
              <p className="text-[11px] uppercase tracking-widest2 text-ivory/70">Handmade in India</p>
            </motion.div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="About Akash Art Gallery"
            />
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg font-light leading-relaxed text-charcoal/70"
            >
              Akash Art Gallery is a creative space dedicated to bringing beautiful artwork
              and artistic expressions to art lovers. Our collection reflects creativity,
              passion and a deep appreciation for art, combining traditional inspiration
              with contemporary artistic styles.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-4 font-serif text-xl italic text-charcoal/80"
            >
              “Every piece is shaped by hand — from straw, leaf, earth and emotion.”
            </motion.p>

            <ul className="mt-8 space-y-4">
              {POINTS.map((p, i) => (
                <motion.li
                  key={p.text}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold-dark">
                    <p.icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="text-[15px] text-charcoal/80">{p.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9"
            >
              <a
                href="#process"
                className="group inline-flex items-center gap-2.5 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ivory transition hover:bg-gold"
              >
                Discover Our Story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gold/25 pt-8">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="font-serif text-3xl sm:text-4xl text-charcoal">{s.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-charcoal/55">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
