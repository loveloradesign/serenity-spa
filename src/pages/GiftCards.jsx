import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const amounts = [50, 75, 100, 150, 200]

export default function GiftCards() {
  const [amount, setAmount] = useState(100)
  const [sent, setSent] = useState(false)
  const [heroRef, heroVisible] = useScrollReveal()
  const [formRef, formVisible] = useScrollReveal()

  const handlePurchase = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <section ref={heroRef} className="bg-gradient-to-br from-primary-50 via-surface to-surface py-4 sm:py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-light text-slate-800 mb-2 sm:mb-3">Gift Cards</h1>
          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto">
            Give the gift of relaxation — a Serenity Spa gift card for any occasion.
          </p>
        </motion.div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative max-w-sm mx-auto lg:mx-0"
              >
                <img
                  src="/gift-cards/gc-1.png"
                  alt="Serenity Spa Gift Card"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 bg-primary text-white px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">${amount} Value</p>
                </div>
              </motion.div>

              <div className="mt-6 text-center lg:text-left">
                <p className="text-sm text-muted mb-3">Choose amount:</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        amount === a
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'bg-white border border-slate-200 text-slate-600 hover:border-primary'
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div ref={formRef}>
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                animate={formVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                onSubmit={handlePurchase}
                className="bg-card rounded-2xl p-2.5 sm:p-4 shadow-sm border border-slate-100"
              >
                <h2 className="text-xl sm:text-2xl font-light text-slate-800 mb-3">Purchase Gift Card</h2>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Recipient Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter recipient name"
                      className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Recipient Email</label>
                    <input
                      type="email"
                      required
                      placeholder="recipient@example.com"
                      className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-2.5 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Add a personal message..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none text-sm"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-sm text-slate-600">
                      Total: <span className="font-bold text-primary text-lg">${amount}</span>
                    </p>
                    <button type="submit" className="btn-primary w-full sm:w-auto text-sm px-5 py-2.5">
                      Purchase Gift Card
                    </button>
                  </div>
                </div>
              </motion.form>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm text-center"
                  >
                    Gift card purchased! It will be delivered to the recipient's email.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
