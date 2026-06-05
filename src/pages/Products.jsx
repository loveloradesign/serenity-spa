import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const products = [
  {
    src: '/products/p-1.png',
    name: 'Organic Facial Oil',
    price: '$48',
    desc: 'A lightweight, nutrient-rich oil infused with jojoba, rosehip, and lavender for a natural glow.',
    category: 'Skincare',
  },
  {
    src: '/products/p-2.png',
    name: 'Soothing Body Lotion',
    price: '$36',
    desc: 'Shea butter and aloe vera blend that deeply hydrates and calms sensitive skin.',
    category: 'Body Care',
  },
  {
    src: '/products/p-3.png',
    name: 'Aromatherapy Candle Set',
    price: '$42',
    desc: 'Set of three soy wax candles in lavender, eucalyptus, and chamomile for ultimate relaxation.',
    category: 'Wellness',
  },
]

export default function Products() {
  const [selected, setSelected] = useState(null)
  const [heroRef, heroVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <>
      <section ref={heroRef} className="bg-gradient-to-br from-primary-50 via-surface to-surface py-4 sm:py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center"
        >
          <h1 className="section-heading mb-3">Our Products</h1>
          <p className="section-subheading">
            Premium organic products used in our treatments — now available to take home.
          </p>
        </motion.div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                animate={gridVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
                onClick={() => setSelected(product)}
              >
                <div className="aspect-square bg-primary-50 overflow-hidden">
                  <img
                    src={product.src}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 sm:p-3">
                  <span className="text-xs text-primary uppercase tracking-wider font-medium">{product.category}</span>
                  <div className="flex items-center justify-between mt-1 mb-2">
                    <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">{product.desc}</p>
                  <button className="mt-2 sm:mt-4 text-sm font-medium text-primary hover:text-primary-600 transition-colors">
                    Quick View &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square bg-primary-50">
                <img
                  src={selected.src}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2.5 sm:p-3">
                <span className="text-xs text-primary uppercase tracking-wider font-medium">{selected.category}</span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="text-xl font-semibold text-slate-800">{selected.name}</h3>
                  <span className="text-xl font-bold text-primary">{selected.price}</span>
                </div>
                <p className="text-muted mt-3 leading-relaxed">{selected.desc}</p>
                <button className="btn-primary w-full mt-4 sm:mt-6">Add to Cart</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
