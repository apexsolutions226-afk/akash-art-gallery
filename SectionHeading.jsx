import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = 'center',
}) {
  const alignCls =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 ${alignCls}`}
    >
      {eyebrow && (
        <span
          className={`flex items-center gap-3 text-[11px] sm:text-xs font-medium tracking-widest2 uppercase ${
            dark ? 'text-gold-light' : 'text-gold-dark'
          }`}
        >
          <span className="h-px w-8 bg-gold/70" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-gold/70" />}
        </span>
      )}
      <h2
        className={`font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-medium ${
          dark ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base sm:text-lg font-light leading-relaxed ${
            dark ? 'text-ivory/70' : 'text-charcoal/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
