import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FileCheck,
  GraduationCap,
  User,
  Briefcase,
  Check,
  XCircle,
  Upload,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const atsTips = [
  'Use standard headings (Experience, Education, Skills) and simple formatting.',
  'Include relevant keywords from the job description.',
  'Avoid tables, graphics, or complex layouts that ATS cannot parse.',
  'Save as PDF or .docx; ensure no image-only text.',
  'Keep sections clear and scannable.',
]

const formats = [
  {
    icon: GraduationCap,
    title: 'Students',
    desc: 'Focus on academics, projects, internships, certifications, and extracurriculars. Clear education timeline and skills section.',
  },
  {
    icon: User,
    title: 'Freshers',
    desc: 'Projects and internships first, then education. Add relevant courses and tools. Keep it to 1 page when possible.',
  },
  {
    icon: Briefcase,
    title: 'Experienced',
    desc: 'Reverse chronological experience with quantifiable impact. Tailor to each role. Highlight leadership and ownership.',
  },
]

const dos = [
  'Keep it concise (1–2 pages).',
  'Use action verbs and bullet points.',
  'Quantify achievements where possible.',
  'Tailor for each application.',
  'Proofread multiple times.',
]

const donts = [
  'Don’t use generic objectives or lie.',
  'Avoid typos, inconsistent fonts, or clutter.',
  'Don’t include irrelevant personal details.',
  'Avoid long paragraphs; use bullets.',
  'Don’t skip tailoring for the role.',
]

const reviewSteps = [
  'You share your current resume (or draft).',
  'We review structure, content, and ATS-friendliness.',
  'We suggest edits and provide an improved version.',
  'You get a final resume ready to share with recruiters.',
]

export default function ResumePrep() {
  return (
    <>
      <PageHero
        title="Resume Preparation"
        subtitle="ATS-friendly resumes, formats for students and professionals, and a clear review process to get you shortlisted."
      />

      <Section
        title="How to Create an ATS-Friendly Resume"
        subtitle="Get past applicant tracking systems and into human hands."
        className="bg-brand-bgAlt"
      >
        <div className="max-w-2xl space-y-4">
          {atsTips.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-brand-mute text-sm pt-1">{t}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Resume Formats" subtitle="Right structure for your profile.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((f) => (
            <Card key={f.title} icon={f.icon} title={f.title} description={f.desc} />
          ))}
        </div>
      </Section>

      <Section
        title="Resume Dos and Don'ts"
        subtitle="Quick rules for a professional resume."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-brand-heading mb-4 flex items-center gap-2 text-brand-primary">
              <Check className="w-5 h-5" /> Do
            </h3>
            <ul className="space-y-2">
              {dos.map((d) => (
                <li key={d} className="text-brand-mute text-sm flex items-start gap-2">
                  <span className="text-brand-primary">✓</span> {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-heading mb-4 flex items-center gap-2 text-amber-600">
              <XCircle className="w-5 h-5" /> Don't
            </h3>
            <ul className="space-y-2">
              {donts.map((d) => (
                <li key={d} className="text-brand-mute text-sm flex items-start gap-2">
                  <span className="text-amber-400">✗</span> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Our Resume Review Process" subtitle="From draft to interview-ready.">
        <div className="max-w-2xl space-y-4">
          {reviewSteps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-semibold flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-brand-heading">{step}</p>
              {i < reviewSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-brand-border ml-auto hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Upload className="w-5 h-5" />
            Upload Resume – We Will Call You
          </Link>
        </div>
      </Section>
    </>
  )
}
