import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const categories = ['All', 'Treatment Rooms', 'Relaxation Areas', 'Products']

const galleryItems = [
  { src: '/gallery/gl-1.png', category: 'Treatment Rooms', title: 'Massage Suite' },
  { src: '/gallery/gl-2.png', category: 'Relaxation Areas', title: 'Relaxation Lounge' },
  { src: '/gallery/gl-3.png', category: 'Relaxation Areas', title: 'Outdoor Spa' },
  { src: '/gallery/gl-4.png', category: 'Treatment Rooms', title: 'Sauna & Steam' },
]

function GalleryGrid({ items, active }) {
  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
      >
        {filtered.map((item) => (
          <motion.div
            key={item.src}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3">
              <div>
                <span className="text-xs text-white/70 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [heroRef, heroVisible] = useScrollReveal()

  return (
    <>
      <section ref={heroRef} className="bg-gradient-to-br from-primary-50 via-surface to-surface py-4 sm:py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center"
        >
          <h1 className="section-heading mb-3">Our Gallery</h1>
          <p className="section-subheading">
            Step inside Serenity Spa — explore our tranquil spaces and curated environment.
          </p>
        </motion.div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white text-slate-600 hover:bg-primary-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <GalleryGrid items={galleryItems} active={active} />
        </div>
      </section>
    </>
  )
}
