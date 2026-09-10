import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Video,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'

const trialHighlights = [
  { icon: Video, text: '30–45 minute live session' },
  { icon: ClipboardCheck, text: 'Clear explanation of the course & what to expect' },
  { icon: CheckCircle2, text: 'A small practical task to try things hands-on' },
  { icon: ShieldCheck, text: 'Honest guidance — no unrealistic placement promises' },
]

const programs = [
  {
    name: 'Basic',
    tagline: 'For getting started with the fundamentals.',
    features: [
      'Core interview & communication basics',
      'Resume review essentials',
      'Self-paced practice material',
    ],
    highlight: false,
  },
  {
    name: 'Intermediate',
    tagline: 'For building real interview confidence.',
    features: [
      'Everything in Basic',
      'Mock interviews with feedback',
      'Resume + LinkedIn optimization',
    ],
    highlight: true,
  },
  {
    name: 'Job-Ready',
    tagline: 'End-to-end support until you land the role.',
    features: [
      'Everything in Intermediate',
      '1:1 mentoring & structured roadmap',
      'Ongoing mock rounds & application support',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Programs & Demo"
        subtitle="Start with a trial demo, then choose the program that fits where you are in your journey."
      />

      {/* Trial Demo */}
      <Section
        title="Trial Demo Session"
        subtitle="A low-risk way to experience how we work before committing to a program."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {trialHighlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-white border border-brand-border"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <h.icon className="w-5 h-5" />
              </div>
              <p className="text-brand-mute text-sm pt-1.5">{h.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd3KlavzBjhYBeLuyY8XnDfQtMKC1m8S6zxrFOxTByF9gxe-Q/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Demo Call
          </a>
        </div>
      </Section>

      {/* Programs */}
      <Section
        title="Choose Your Program"
        subtitle="Structured tracks for every stage — from fundamentals to full job-readiness. Reach out for details."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card flex flex-col ${
                p.highlight
                  ? "border-brand-primary ring-1 ring-brand-primary/30"
                  : ""
              }`}
            >
              {p.highlight && (
                <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-2">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-brand-heading">
                  {p.name}
                </h3>
              </div>
              <p className="text-brand-mute text-sm mb-4">{p.tagline}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-brand-mute"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="btn-outline w-full justify-center inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd3KlavzBjhYBeLuyY8XnDfQtMKC1m8S6zxrFOxTByF9gxe-Q/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Demo Call
          </a>
        </div>
      </Section>
    </>
  );
}