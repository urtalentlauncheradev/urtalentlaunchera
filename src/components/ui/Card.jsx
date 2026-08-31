import { motion } from 'framer-motion'

export default function Card({ icon: Icon, title, description, className = '', hover = true }) {
  const baseClass = `card cursor-default ${className}`

  if (hover) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -4 }}
        className={baseClass}
      >
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-brand-heading mb-2">{title}</h3>
        {description && <p className="text-brand-mute text-sm leading-relaxed">{description}</p>}
      </motion.div>
    )
  }

  return (
    <div className={baseClass}>
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-brand-heading mb-2">{title}</h3>
      {description && <p className="text-brand-mute text-sm leading-relaxed">{description}</p>}
    </div>
  )
}
