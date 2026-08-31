import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  GraduationCap,
  Briefcase,
  Laptop,
  FileSearch,
  Linkedin,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const expectations = [
  'Relevant skills and willingness to learn',
  'Clear communication and professionalism',
  'Culture fit and teamwork',
  'Problem-solving and ownership',
  'Basic domain knowledge (freshers) or proven experience',
]

const fresherVsExp = [
  {
    type: 'Fresher',
    icon: GraduationCap,
    points: [
      'Focus on projects, internships, and academic work',
      'Highlight learnability and fundamentals',
      'Prepare for aptitude and basic technical tests',
      'Emphasize soft skills and enthusiasm',
    ],
  },
  {
    type: 'Experienced',
    icon: Briefcase,
    points: [
      'Quantify impact and achievements',
      'Tailor resume and answers to the role',
      'Prepare for behavioral and system design / domain discussions',
      'Show leadership and ownership examples',
    ],
  },
]

const itNonIt = [
  {
    title: 'IT Roles',
    icon: Laptop,
    desc: 'Technical rounds, coding, system design, and tools. We help you prepare for DSA, frameworks, and real-world scenarios.',
  },
  {
    title: 'Non-IT Roles',
    icon: Building2,
    desc: 'Domain knowledge, case studies, and communication. We guide you on industry-specific prep and presentation.',
  },
]

const applicationTips = [
  'Apply to roles that match your profile; quality over quantity.',
  'Customize resume and cover note for each application.',
  'Follow up politely after applying when appropriate.',
  'Use referrals where possible; they often get faster responses.',
]

const linkedInTips = [
  'Optimize your headline and summary for keywords.',
  'Add skills, endorsements, and recommendations.',
  'Engage with companies and recruiters; stay active.',
  'Use LinkedIn Jobs filters and alerts for relevant roles.',
]

export default function JobReadiness() {
  return (
    <>
      <PageHero
        title="Job Readiness"
        subtitle="Understand what companies expect, how to prepare as a fresher or experienced professional, and strategies for IT & non-IT roles."
      />

      <Section
        title="What Companies Expect"
        subtitle="Align your preparation with employer expectations."
        className="bg-brand-bgAlt"
      >
        <ul className="space-y-3 max-w-2xl">
          {expectations.map((e, i) => (
            <motion.li
              key={e}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 text-brand-mute"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
              {e}
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section title="Fresher vs Experienced" subtitle="Tailored preparation for your career stage.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fresherVsExp.map((f) => (
            <motion.div
              key={f.type}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-brand-heading">{f.type}</h3>
              </div>
              <ul className="space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-brand-mute text-sm">
                    <ArrowRight className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="IT & Non-IT Job Guidance"
        subtitle="We support both technical and non-technical career paths."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itNonIt.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </Section>

      <Section title="Job Application Strategy" subtitle="Apply smarter, not just more.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-brand-heading mb-4 flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-brand-primary" />
              General Tips
            </h3>
            <ul className="space-y-2">
              {applicationTips.map((t) => (
                <li key={t} className="text-brand-mute text-sm flex items-start gap-2">
                  <span className="text-brand-primary">•</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-heading mb-4 flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-brand-primary" />
              LinkedIn Job Search
            </h3>
            <ul className="space-y-2">
              {linkedInTips.map((t) => (
                <li key={t} className="text-brand-mute text-sm flex items-start gap-2">
                  <span className="text-brand-primary">•</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Share Your CV – We Will Call You
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
