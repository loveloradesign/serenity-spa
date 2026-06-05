import { useState } from 'react'
import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  'Swedish Massage', 'Deep Tissue Massage', 'Hot Stone Massage', 'Aromatherapy Massage',
  'Classic Facial', 'Anti-Aging Facial', 'Body Scrub & Wrap', 'Hydrotherapy',
]

const faqs = [
  { q: 'What should I wear for my treatment?', a: 'We provide plush robes, slippers, and disposable undergarments. You undress only to your comfort level — your therapist will ensure you remain properly draped at all times.' },
  { q: 'How early should I arrive?', a: 'We recommend arriving 15-20 minutes before your appointment to fill out any necessary forms, change, and begin relaxing in our lounge.' },
  { q: 'Can I request a specific therapist?', a: 'Absolutely! You can request a preferred therapist when booking. We\'ll do our best to accommodate your preference.' },
  { q: 'What is your cancellation policy?', a: 'We kindly ask for at least 24 hours notice for cancellations. Late cancellations may be subject to a 50% service fee.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', requests: '' })
  const [openFaq, setOpenFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [heroRef, heroVisible] = useScrollReveal()
  const [formRef, formVisible] = useScrollReveal()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <section ref={heroRef} className="relative py-4 sm:py-6 lg:py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/contact/contact.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white mb-2 sm:mb-3">Book Your Experience</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to experience true relaxation? Fill out the form below and we will reserve your perfect treatment.
          </p>
        </motion.div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
            <div className="lg:col-span-3">
              <div ref={formRef}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={formVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="text-2xl font-light text-slate-800 mb-3">Book Your Appointment</h2>
                  <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input type="text" id="name" name="name" required value={form.name} onChange={handleChange}
                        className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Jane Doe" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" id="email" name="email" required value={form.email} onChange={handleChange}
                          className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleChange}
                          className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Select Service</label>
                      <select id="service" name="service" required value={form.service} onChange={handleChange}
                        className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                        <option value="">Choose a treatment...</option>
                        {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                        <input type="date" id="date" name="date" required value={form.date} onChange={handleChange}
                          className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-1">Preferred Time</label>
                        <input type="time" id="time" name="time" required value={form.time} onChange={handleChange}
                          className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="requests" className="block text-sm font-medium text-slate-700 mb-1">Special Requests</label>
                      <textarea id="requests" name="requests" rows={4} value={form.requests} onChange={handleChange}
                        className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Any allergies, preferences, or special requirements..." />
                    </div>
                    <button type="submit" className="btn-primary text-base px-5 py-2.5 w-full sm:w-auto">
                      Book Your Appointment
                    </button>
                  </form>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-2.5 sm:mt-4 sm:p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm"
                    >
                      Thank you! Your booking request has been received. We will confirm your appointment shortly.
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-100 sticky top-24">
                <h2 className="text-2xl font-light text-slate-800 mb-3">Visit Us</h2>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Address', value: '123 Wellness Lane, Serenity City' },
                    { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Phone', value: '(555) 123-4567' },
                    { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Email', value: 'hello@serenityspa.com' },
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Hours', value: 'Mon-Fri: 9AM-8PM / Sat: 10AM-6PM / Sun: Closed' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-2 sm:gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
                        <p className="text-sm text-muted">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-8 aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img src="/contact/contact.png" alt="Serenity Spa location" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8 bg-primary-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-3xl font-light text-slate-800 mb-3">Frequently Asked Questions</h2>
            <p className="text-muted">Everything you need to know before your visit.</p>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  {faq.q}
                  <svg className={`w-5 h-5 text-muted transition-transform duration-300 ${openFaq === faq.q ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === faq.q ? 'auto' : 0, opacity: openFaq === faq.q ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-3 sm:px-5 pb-3 sm:pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
