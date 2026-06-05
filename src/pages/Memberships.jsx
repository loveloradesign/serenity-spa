import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const plans = [
  {
    name: 'Essentials',
    price: '$79',
    period: '/month',
    features: ['1 treatment per month', '10% off products', 'Free consultation', 'Flexible scheduling'],
    popular: false,
  },
  {
    name: 'Wellness',
    price: '$149',
    period: '/month',
    features: ['2 treatments per month', '20% off products', 'Priority booking', 'Guest pass (1x/month)', 'Birthday bonus'],
    popular: true,
  },
  {
    name: 'Ultimate',
    price: '$249',
    period: '/month',
    features: ['4 treatments per month', '30% off products', 'VIP priority booking', 'Unlimited guest passes', 'Quarterly wellness consult', 'Exclusive event access'],
    popular: false,
  },
]

export default function Memberships() {
  const [heroRef, heroVisible] = useScrollReveal()
  const [plansRef, plansVisible] = useScrollReveal({ repeat: true })

  return (
    <>
      <section ref={heroRef} className="bg-gradient-to-br from-primary-50 via-surface to-surface py-4 sm:py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center"
        >
          <h1 className="section-heading mb-2 sm:mb-3">Memberships</h1>
          <p className="section-subheading">
            Elevate your wellness journey with exclusive benefits and savings.
          </p>
        </motion.div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8">
        <div ref={plansRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={plansVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative bg-card rounded-2xl p-3 sm:p-4 shadow-sm border transition-all duration-300 ${
                  plan.popular
                    ? 'border-primary ring-2 ring-primary/20 scale-105 md:scale-110'
                    : 'border-slate-100 hover:border-primary/30 hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2.5 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/20'
                      : 'bg-primary-50 text-primary hover:bg-primary-100'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8 bg-primary-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-4 text-center">
          <img src="/memberships/membership.png" alt="Membership perks" className="w-full max-w-md mx-auto rounded-2xl shadow-sm mb-5" />
          <h2 className="text-xl sm:text-3xl font-light text-slate-800 mb-2 sm:mb-3">Why Become a Member?</h2>
          <p className="text-muted leading-relaxed max-w-xl mx-auto">
            Enjoy exclusive perks, guaranteed availability, and significant savings on every visit.
            Your wellness journey deserves consistency — and our membership plans make it effortless.
          </p>
        </div>
      </section>
    </>
  )
}
