import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Send, CheckCircle2, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { ARTWORKS, CONTACT } from '../data/artworks'

const inputCls =
  'w-full rounded-xl border border-charcoal/15 bg-ivory/60 px-4 py-3.5 text-[15px] text-charcoal placeholder:text-charcoal/40 outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    // Simulate submission (no backend) — then show success.
    setTimeout(() => setStatus('sent'), 1100)
  }

  const reset = () => {
    setForm({ name: '', phone: '', email: '', interest: '', message: '' })
    setStatus('idle')
  }

  return (
    <section id="contact" className="grain relative overflow-hidden bg-charcoal py-24 sm:py-32" aria-label="Contact Akash Art Gallery">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-0 select-none font-serif text-[20vw] leading-none text-ivory/[0.025]"
      >
        Namaste
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Get In Touch"
          title="Let’s Talk About Art"
          subtitle="Interested in our artwork or want to know more? Get in touch with Akash Art Gallery."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10 backdrop-blur"
          >
            <a
              href={`tel:${CONTACT.phone1Intl}`}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-gold/60 hover:bg-gold/10"
            >
              <span className="flex h-13 w-13 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-ivory/55">Call Us</span>
                <span className="block font-serif text-2xl text-ivory group-hover:text-gold-light">{CONTACT.phone1}</span>
              </span>
            </a>

            <a
              href={`tel:${CONTACT.phone2Intl}`}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-gold/60 hover:bg-gold/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-ivory/55">Also Reach Us</span>
                <span className="block font-serif text-2xl text-ivory group-hover:text-gold-light">{CONTACT.phone2}</span>
              </span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-gold/60 hover:bg-gold/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <Mail size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-[0.2em] text-ivory/55">Email Us</span>
                <span className="block truncate font-serif text-xl text-ivory group-hover:text-gold-light">
                  {CONTACT.email}
                </span>
              </span>
            </a>

            <p className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-ivory/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              Based in Maharashtra, India — sharing handmade artworks with art lovers everywhere.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a
                href={`tel:${CONTACT.phone1Intl}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-gold-light hover:text-charcoal"
              >
                <Phone size={15} /> Call Now
              </a>
              <a
                href={`mailto:${CONTACT.email}?subject=Artwork%20Enquiry%20—%20Akash%20Art%20Gallery`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-4 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-ivory transition hover:border-gold-light hover:text-gold-light"
              >
                <Mail size={15} /> Email Us
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1FA855] px-4 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition hover:brightness-110"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-ivory p-7 sm:p-10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.15 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-green-600/10 text-green-700"
                  >
                    <CheckCircle2 size={44} strokeWidth={1.6} />
                  </motion.span>
                  <h3 className="mt-6 font-serif text-3xl text-charcoal">Thank You!</h3>
                  <p className="mt-3 max-w-sm text-[15px] font-light leading-relaxed text-charcoal/65">
                    Your enquiry has been received. Akash Art Gallery will get back to you very
                    soon — usually within a day.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-white"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp
                    </a>
                    <button
                      onClick={reset}
                      className="rounded-full border border-charcoal/20 px-6 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-charcoal transition hover:border-gold hover:text-gold-dark"
                    >
                      Send Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <h3 className="font-serif text-3xl text-charcoal">Send an Enquiry</h3>
                    <p className="mt-1 text-sm font-light text-charcoal/60">
                      Tell us what moved you — we will help you find the perfect piece.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/60">Name *</span>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Your full name"
                        className={inputCls}
                        autoComplete="name"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/60">Phone Number *</span>
                      <input
                        required
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="e.g. 98765 43210"
                        inputMode="tel"
                        pattern="[0-9+\\-\\s]{8,15}"
                        title="Please enter a valid phone number"
                        className={inputCls}
                        autoComplete="tel"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/60">Email</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@example.com"
                        className={inputCls}
                        autoComplete="email"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/60">Interested In</span>
                      <select value={form.interest} onChange={set('interest')} className={inputCls}>
                        <option value="">Select an artwork or category…</option>
                        <optgroup label="Categories">
                          <option>Portraits</option>
                          <option>Paintings</option>
                          <option>Traditional Art</option>
                          <option>Abstract Art</option>
                          <option>Handmade Art</option>
                        </optgroup>
                        <optgroup label="Artworks">
                          {ARTWORKS.map((a) => (
                            <option key={a.id} value={a.title}>
                              {a.title}
                            </option>
                          ))}
                        </optgroup>
                        <option>Custom / Commissioned Piece</option>
                      </select>
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/60">Message *</span>
                    <textarea
                      required
                      value={form.message}
                      onChange={set('message')}
                      rows={4}
                      placeholder="I loved the straw portrait of Shivaji Maharaj. Could you share more details?"
                      className={`${inputCls} resize-none`}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-charcoal px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-ivory transition hover:bg-gold disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-ivory/40 border-t-ivory" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs font-light text-charcoal/45">
                    Prefer instant chat? Reach us directly on WhatsApp — we reply fast.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
