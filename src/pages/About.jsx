import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'

const team = [
  {
    src: '/about/ab-1.png',
    name: 'Amara Chen',
    specialty: 'Lead Massage Therapist',
    bio: 'With over 12 years of experience, Amara specializes in deep tissue and hot stone therapies, bringing a healing touch to every session.',
  },
  {
    src: '/about/ab-2.png',
    name: 'Lily Torres',
    specialty: 'Senior Esthetician',
    bio: 'Lily is passionate about organic skincare and advanced facial techniques, helping clients achieve radiant, healthy skin.',
  },
  {
    src: '/about/ab-3.png',
    name: 'Marcus Webb',
    specialty: 'Holistic Wellness Coach',
    bio: 'Marcus combines body treatments with mindfulness practices to guide clients toward complete physical and emotional balance.',
  },
]

const timeline = [
  { year: '2016', title: 'Founded', desc: 'Serenity Spa opened its doors with a vision to create a sanctuary for holistic wellness.' },
  { year: '2018', title: 'Expanded', desc: 'Added our hydrotherapy wing and introduced organic product line.' },
  { year: '2020', title: 'Recognized', desc: 'Awarded "Best Wellness Center" by Citywide Living Magazine.' },
  { year: '2024', title: 'Renewed', desc: 'Completed a full renovation with new treatment rooms, sauna, and relaxation lounge.' },
]

export default function About() {
  const [heroRef, heroVisible] = useScrollReveal()
  const [storyRef, storyVisible] = useScrollReveal()
  const [teamRef, teamVisible] = useScrollReveal()
  const [timelineRef, timelineVisible] = useScrollReveal()

  return (
    <>
      <section ref={heroRef} className="relative py-4 sm:py-6 lg:py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about/ab-4.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 text-center"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white mb-2 sm:mb-3">Our Philosophy</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            At Serenity Spa, we believe true wellness is a harmonious balance of mind, body, and spirit. Every treatment we offer is a step toward that equilibrium.
          </p>
        </motion.div>
      </section>

      <section ref={storyRef} className="py-4 sm:py-6 lg:py-8 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Story</span>
              <h2 className="text-xl sm:text-3xl font-light text-slate-800 mt-3 mb-2 sm:mb-4">
                Where Tranquility Meets Expertise
              </h2>
              <div className="space-y-2 sm:space-y-3 text-muted leading-relaxed">
                <p>
                  Founded on the principle that self-care is essential, Serenity Spa brings together seasoned wellness professionals and a serene environment designed for deep relaxation.
                </p>
                <p>
                  Our team is dedicated to crafting personalized experiences that honor your unique journey. From the moment you step through our doors, every detail is designed to help you unwind, recharge, and rediscover your inner calm.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm"
            >
              <img src="/about/ab-1.png" alt="Serenity Spa interior" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-3 sm:mb-5"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Team</span>
            <h2 className="section-heading mt-3">Meet Our Therapists</h2>
            <p className="section-subheading">Dedicated professionals committed to your well-being.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-3 text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.specialty}</p>
                  <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-4 sm:py-6 lg:py-8 bg-primary-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-3 sm:mb-5"
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Journey</span>
            <h2 className="section-heading mt-3">Milestones</h2>
          </motion.div>
          <div className="space-y-2 sm:space-y-3">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={timelineVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex items-start gap-3 sm:gap-4"
              >
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary-100" />
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-primary-200" />}
                </div>
                <div className="bg-card rounded-xl p-2.5 sm:p-3 shadow-sm border border-slate-100 flex-1">
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="text-lg font-semibold text-slate-800 mt-1">{item.title}</h3>
                  <p className="text-sm text-muted mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
