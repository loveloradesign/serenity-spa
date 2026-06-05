import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const serviceGroups = [
  {
    category: 'Massage Therapy',
    image: '/services/services-1.png',
    items: [
      {
        name: 'Swedish Massage',
        desc: 'A gentle full-body massage using long strokes, kneading, and circular movements to relax and energize.',
        duration: '60 / 90 min',
        price: '$85 / $120',
      },
      {
        name: 'Deep Tissue Massage',
        desc: 'Targets deep layers of muscle and connective tissue to release chronic tension and knots.',
        duration: '60 / 90 min',
        price: '$95 / $135',
      },
      {
        name: 'Hot Stone Massage',
        desc: 'Heated basalt stones placed on key points of the body to melt away tension and improve circulation.',
        duration: '75 min',
        price: '$115',
      },
      {
        name: 'Aromatherapy Massage',
        desc: 'Custom essential oil blends combined with gentle massage to promote emotional and physical well-being.',
        duration: '60 min',
        price: '$100',
      },
    ],
  },
  {
    category: 'Facials',
    image: '/services/services-2.png',
    items: [
      {
        name: 'Classic Facial',
        desc: 'Deep cleanse, exfoliation, extraction, mask, and moisturizer for a refreshed, glowing complexion.',
        duration: '60 min',
        price: '$95',
      },
      {
        name: 'Anti-Aging Facial',
        desc: 'Target fine lines and loss of firmness with collagen-boosting serums and lifting techniques.',
        duration: '75 min',
        price: '$125',
      },
      {
        name: 'Hydrating Facial',
        desc: 'Intense moisture infusion for dry or dehydrated skin using hyaluronic acid and botanical extracts.',
        duration: '60 min',
        price: '$105',
      },
    ],
  },
  {
    category: 'Body Treatments',
    image: '/services/services-3.png',
    items: [
      {
        name: 'Body Scrub & Wrap',
        desc: 'Exfoliating sea salt scrub followed by a nourishing seaweed wrap to detoxify and soften skin.',
        duration: '75 min',
        price: '$110',
      },
      {
        name: 'Hydrotherapy',
        desc: 'Immerse in warm mineral waters with hydro jets that soothe muscles and stimulate circulation.',
        duration: '45 min',
        price: '$80',
      },
      {
        name: 'Hot Stone Therapy',
        desc: 'Full-body hot stone placement combined with gentle massage for deep muscle relaxation.',
        duration: '90 min',
        price: '$130',
      },
    ],
  },
  {
    category: 'Packages',
    image: '/services/services-5.png',
    items: [
      {
        name: 'Serenity Escape',
        desc: 'Swedish massage + Classic facial + Body scrub. The ultimate full-day pampering experience.',
        duration: '3 hrs',
        price: '$260',
      },
      {
        name: 'Wellness Duo',
        desc: 'Couples massage with aromatherapy, sparkling wine, and a private relaxation suite.',
        duration: '90 min',
        price: '$240',
      },
    ],
  },
]

export default function Services() {
  const [heroRef, heroVisible] = useScrollReveal()

  return (
    <>
      <section ref={heroRef} className="relative py-4 sm:py-6 lg:py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services/services-6.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white mb-2 sm:mb-4">
            Our Services & Treatments
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore our comprehensive menu of premium wellness services crafted to nurture your mind, body, and soul.
          </p>
        </motion.div>
      </section>

      {serviceGroups.map((group, groupIdx) => (
        <ServiceGroupSection key={group.category} group={group} index={groupIdx} />
      ))}

      <section className="bg-primary-50/60 py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <h2 className="text-xl sm:text-3xl font-light text-slate-800 mb-3 sm:mb-5">Ready to Book?</h2>
          <p className="text-muted mb-3 sm:mb-5 max-w-lg mx-auto">
            Choose your preferred treatment and schedule your appointment with ease.
          </p>
          <Link to="/contact" className="btn-primary text-base px-5 py-2.5">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  )
}

function ServiceGroupSection({ group, index }) {
  const [sectionRef, sectionVisible] = useScrollReveal()

  return (
    <section ref={sectionRef} className={`py-4 sm:py-6 lg:py-8 ${index % 2 === 0 ? 'bg-surface' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-start mb-2 sm:mb-4"
        >
          <div className="lg:w-1/3">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <img
                src={group.image}
                alt={group.category}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-800 mb-2">{group.category}</h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mb-2 sm:mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {group.items.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <h3 className="text-base font-semibold text-slate-800 mb-2">{service.name}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">{service.desc}</p>
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-100">
                    <span className="text-slate-600">{service.duration}</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
