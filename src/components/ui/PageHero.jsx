import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-16 md:py-24 overflow-hidden bg-white border-b border-brand-border"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h1>
        {subtitle && <p className="section-sub mx-auto mb-6">{subtitle}</p>}
        {children}
      </div>
    </motion.section>
  )
}
