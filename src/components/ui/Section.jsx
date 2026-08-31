export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10 md:mb-14">
            {title && <h2 className="section-heading">{title}</h2>}
            {subtitle && <p className="section-sub mt-2">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
