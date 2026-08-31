import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  FileEdit,
  Linkedin,
  Mic2,
  Sparkles,
  Linkedin as LinkedinIcon,
  ArrowRight,
  Check,
} from 'lucide-react'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const services = [
  { icon: MessageCircle, title: 'Interview Training', path: '/interview-preparation' },
  { icon: FileEdit, title: 'Resume Updation', path: '/resume-preparation' },
  { icon: Linkedin, title: 'LinkedIn Optimization', path: '/resume-preparation' },
  { icon: Mic2, title: 'Mock Interview Practice', path: '/interview-preparation' },
  { icon: Sparkles, title: 'Resume Enhancement', path: '/resume-preparation' },
  { icon: LinkedinIcon, title: 'LinkedIn Page Update', path: '/resume-preparation' },
]

const benefits = [
  'Personalized Interview Coaching',
  'Professional Resume Writing',
  'LinkedIn Profile Updates',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            U R Talent Launchera
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-heading mb-4 md:mb-6 leading-tight"
          >
            Struggling with Job{' '}
            <span className="text-brand-primary relative">
              Interviews?
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-primary/30 rounded-full" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-mute mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            We Help You <span className="text-brand-primary font-semibold">Nail The Job!</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* <Link to="/login" className="btn-ghost px-6 py-3.5">
              Login
            </Link>
            <Link to="/signup" className="btn-primary px-8 py-3.5 inline-flex items-center gap-2">
              Sign Up
              <ArrowRight className="w-5 h-5" />
            </Link> */}
            <Link to="/contact" className="btn-outline px-8 py-3.5 inline-flex items-center gap-2">
              Share Your CV – We Will Call You
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Section
        title="How We Help You Get Job-Ready"
        subtitle="A clear path from preparation to placement. We guide you through each step with expert support."
        className="bg-brand-bgAlt"
      >
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to={s.path} className="block group">
                  <div className="card flex flex-row items-center gap-4 group-hover:-translate-y-0.5 transition-transform">
                    <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:bg-brand-primary/15 transition-colors">
                      <s.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-brand-heading group-hover:text-brand-primary transition-colors">
                        {s.title}
                      </h3>
                      <span className="text-brand-mute text-sm inline-flex items-center gap-1 mt-0.5">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section
        title="What You Get With Us"
        subtitle="Tailored support to boost your confidence and land the role you deserve."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Check className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-heading">{b}</h3>
                <p className="text-brand-mute text-sm mt-1">
                  {b === 'Personalized Interview Coaching' &&
                    'One-on-one mock interviews and feedback to build confidence.'}
                  {b === 'Professional Resume Writing' &&
                    'ATS-friendly resumes that get you shortlisted.'}
                  {b === 'LinkedIn Profile Updates' &&
                    'Profile optimization to attract recruiters.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-outline inline-flex">
            Share Your CV – We Will Call You
          </Link>
        </div>
      </Section>
    </>
  )
}
