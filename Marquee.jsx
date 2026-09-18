const ITEMS = [
  'Charcoal Portraits',
  'Straw Mosaics',
  'Madhubani Folk Art',
  'Palm-Leaf Craft',
  'Hand-Painted Gourds',
  'Abstract Geometry',
  'Mandala & Zentangle',
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-gold/25 bg-charcoal py-4" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-serif text-lg italic tracking-wide text-ivory/85">{t}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
