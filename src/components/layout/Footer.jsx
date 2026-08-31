import { Link } from 'react-router-dom'
import { Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-brand-heading mb-2">
              U R <span className="text-brand-primary">Talent</span> Launchera
            </h3>
            <p className="text-brand-mute text-sm max-w-md mb-4">
              We help students and job seekers nail interviews, build winning resumes, and get
              job-ready. Personalized coaching, mock interviews, and career guidance.
            </p>
            <Link to="/contact" className="btn-primary text-sm inline-flex">
              Share Your CV – We Will Call You
            </Link>
          </div>

          <div>
            <h4 className="font-semibold text-brand-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: '/interview-preparation', label: 'Interview Prep' },
                { path: '/job-readiness', label: 'Job Readiness' },
                { path: '/resume-preparation', label: 'Resume' },
                { path: '/classes', label: 'Classes' },
                { path: '/contact', label: 'Contact' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-brand-mute hover:text-brand-primary transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-heading mb-4">Contact</h4>
            <ul className="space-y-3 text-brand-mute text-sm">
              <li>
                <a
                  href="tel:9492241609"
                  className="flex items-center gap-2 hover:text-brand-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 <span>9492241609</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:urtalentconsulting@gmail.com"
                  className="flex items-center gap-2 hover:text-brand-primary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  urtalentlaunchera@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.urtalentconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-primary transition-colors"
                >
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  www.urtalentlaunchera.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border text-center text-brand-mute text-sm">
          © {new Date().getFullYear()} U R Talent Launchera. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
