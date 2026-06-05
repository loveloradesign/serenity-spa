import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const treatments = [
  {
    src: '/services/services-1.png',
    title: 'Massage Therapy',
    desc: 'Release tension and restore balance with our therapeutic massage techniques tailored to your needs.',
    duration: '60 / 90 min',
    price: '$85 / $120',
  },
  {
    src: '/services/services-2.png',
    title: 'Facial Care',
    desc: 'Rejuvenate your skin with organic products and advanced facial treatments for a radiant glow.',
    duration: '60 min',
    price: '$95',
  },
  {
    src: '/services/services-3.png',
    title: 'Body Treatments',
    desc: 'Indulge in exfoliating scrubs, nourishing wraps, and hydrotherapy for total body renewal.',
    duration: '75 min',
    price: '$110',
  },
]

const testimonials = [
  {
    text: 'The most relaxing experience I have ever had. The attention to detail and calming atmosphere made all the difference.',
    name: 'Sarah Mitchell',
    title: 'Regular Client',
  },
  {
    text: 'Exceptional massage therapy. I walked out feeling like a completely new person. Highly recommend the hot stone massage.',
    name: 'James Harrington',
    title: 'First-time Visitor',
  },
  {
    text: 'Serenity Spa is my go-to for facials. Their organic products and skilled estheticians give my skin the most beautiful glow.',
    name: 'Elena Rodriguez',
    title: 'Monthly Member',
  },
]

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '8', label: 'Years Experience' },
  { value: '15+', label: 'Award Nominations' },
  { value: '98%', label: 'Satisfaction Rate' },
]

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heroRef, heroVisible] = useScrollReveal()
  const [treatmentsRef, treatmentsVisible] = useScrollReveal()
  const [testimonialsRef, testimonialsVisible] = useScrollReveal()
  const [statsRef, statsVisible] = useScrollReveal()
  const [ctaRef, ctaVisible] = useScrollReveal()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero/hero.img.png" alt="Serenity Spa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        <div ref={heroRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-6 sm:py-8 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-3 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now accepting new clients
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-1 sm:mb-2">
              Find Your{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Inner Peace</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-white/70 max-w-xl mb-1 sm:mb-2 leading-relaxed">
              Rejuvenate your mind, body, and spirit with our curated selection of premium spa treatments and holistic wellness experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link to="/services" className="btn-primary text-base px-6 py-3 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10">
                Explore Services
              </Link>
              <Link to="/contact" className="inline-block px-6 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-base backdrop-blur-sm">
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section ref={treatmentsRef} className="py-2 sm:py-4 md:py-6 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={treatmentsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-3"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Wellness Collection</span>
            <h2 className="section-heading mt-3">Featured Treatments</h2>
            <p className="section-subheading">Discover our most beloved therapies designed to restore harmony and well-being.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 sm:gap-2.5">
            {treatments.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 40 }}
                animate={treatmentsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link to="/services" className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="h-36 sm:h-48 overflow-hidden">
                    <img
                      src={t.src}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2 sm:p-2.5">
                    <h3 className="text-base sm:text-xl font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors">{t.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-3">{t.desc}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{t.duration}</span>
                      <span className="font-semibold text-primary">{t.price}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-2 sm:py-4 md:py-6 bg-primary-50/60 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #7B9EB8 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div ref={statsRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2.5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} className="py-2 sm:py-4 md:py-6 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
            <h2 className="section-heading mt-3">What Our Clients Say</h2>
          </motion.div>
          <div className="relative mt-4 sm:mt-6 lg:mt-8 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-2.5 sm:p-3 shadow-sm border border-slate-100"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (<StarIcon key={i} />))}
                </div>
                <blockquote className="text-sm sm:text-lg md:text-xl text-slate-600 leading-relaxed italic mb-4">&ldquo;{testimonials[currentSlide].text}&rdquo;</blockquote>
                <div>
                  <p className="font-semibold text-slate-800">{testimonials[currentSlide].name}</p>
                  <p className="text-sm text-muted">{testimonials[currentSlide].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'bg-primary w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="relative py-2 sm:py-4 md:py-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services/services-4.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 text-center"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-white mb-2">
            First Visit? <span className="font-semibold">Get 20% Off</span>
          </h2>
          <p className="text-white/70 text-lg mb-3 max-w-lg mx-auto">
            Experience the Serenity difference today. New clients receive a special welcome discount on their first service.
          </p>
          <Link to="/contact" className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-primary-700 font-semibold rounded-lg text-lg shadow-xl hover:bg-white/90 transition-all duration-300 active:scale-[0.97]">
            Claim Your Offer
          </Link>
        </motion.div>
      </section>
    </>
  )
}
