import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/interview-preparation', label: 'Interview Prep' },
  { path: '/job-readiness', label: 'Job Readiness' },
  { path: '/resume-preparation', label: 'Resume' },
  { path: '/communication-skills', label: 'Communication' },
  {
    label: 'More',
    children: [
      { path: '/assignments-support', label: 'Assignments' },
      { path: '/classes', label: 'Classes' },
      { path: '/study-plan', label: 'Study Plan' },
    ],
  },
  { path: '/contact', label: 'Contact' },
]

function NavLink({ item, isActive }) {
  if (item.children) {
    return (
      <div className="relative group">
        <button className="flex items-center gap-1 text-slate-600 hover:text-brand-primary transition-colors py-2">
          {item.label}
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="bg-white border border-brand-border rounded-lg shadow-cardHover py-2 min-w-[180px]">
            {item.children.map((c) => (
              <Link
                key={c.path}
                to={c.path}
                className="block px-4 py-2 text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return (
    <Link
      to={item.path}
      className={`transition-colors py-2 ${
        isActive ? 'text-brand-primary font-medium' : 'text-slate-600 hover:text-brand-primary'
      }`}
    >
      {item.label}
    </Link>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-brand-heading">
              U R <span className="text-brand-primary">Talent</span> Launchera
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.path ? (
                <NavLink key={item.path} item={item} isActive={isActive(item.path)} />
              ) : (
                <NavLink key={item.label} item={item} />
              )
            )}
            <div className="flex items-center gap-3 ml-2">
              {/* <Link to="/login" className="btn-ghost text-sm">
                Login
              </Link>
              <Link to="/signup" className="btn-primary text-sm py-2.5 px-4">
                Sign Up
              </Link> */}
              <Link to="/contact" className="btn-outline text-sm py-2.5 px-4">
                Share Your CV
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            {/* <Link to="/login" className="btn-ghost text-sm py-2 px-3">
              Login
            </Link>
            <Link to="/signup" className="btn-primary text-sm py-2 px-3">
              Sign Up
            </Link> */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-brand-border bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.flatMap((item) =>
                item.children
                  ? item.children.map((c) => (
                      <Link
                        key={c.path}
                        to={c.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2 ${isActive(c.path) ? 'text-brand-primary font-medium' : 'text-slate-600'}`}
                      >
                        {c.label}
                      </Link>
                    ))
                  : [
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2 ${isActive(item.path) ? 'text-brand-primary font-medium' : 'text-slate-600'}`}
                      >
                        {item.label}
                      </Link>,
                    ]
              )}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-outline w-full justify-center mt-4 inline-flex"
              >
                Share Your CV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
