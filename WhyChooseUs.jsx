import { motion } from 'framer-motion'
import { Gem, Palette, HeartHandshake, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const FEATURES = [
  {
    icon: Gem,
    title: 'Unique Artwork',
    text: 'Carefully created and selected artistic pieces.',
  },
  {
    icon: Palette,
    title: 'Creative Excellence',
    text: 'Artwork inspired by creativity, culture and imagination.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Experience',
    text: 'Connect with us to discover artwork that matches your taste.',
  },
  {
    icon: Sparkles,
    title: 'Art With Emotion',
    text: 'Every artwork tells its own story.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-ivory py-24 sm:py-32" aria-label="Why choose Akash Art Gallery">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Gallery Promise"
          title="Why Choose Us"
          subtitle="A gallery experience shaped around craft, culture and connection."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_28px_60px_-24px_rgba(138,111,62,0.5)]"
            >
              <span
                aria-hidden
                className="absolute -right-4 -top-6 font-serif text-[5.5rem] leading-none text-charcoal/[0.05] transition-colors duration-500 group-hover:text-gold/15"
              >
                0{i + 1}
              </span>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/15 to-gold/5 text-gold-dark transition-all duration-500 group-hover:bg-gold group-hover:text-white">
                <f.icon size={24} strokeWidth={1.5} />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl text-charcoal">{f.title}</h3>
              <p className="relative mt-2.5 text-[15px] font-light leading-relaxed text-charcoal/65">
                {f.text}
              </p>
              <span className="relative mt-6 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
