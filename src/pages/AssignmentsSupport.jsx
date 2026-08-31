import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen,
  FolderKanban,
  Mic2,
  GraduationCap,
  Users,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const services = [
  {
    icon: BookOpen,
    title: 'College Assignments Guidance',
    description: 'Understanding requirements, structure, and deadlines. We help you plan and execute assignments effectively.',
  },
  {
    icon: FolderKanban,
    title: 'Project Explanation & Support',
    description: 'Clarify concepts, architecture, and implementation. Get unstuck and deliver quality project work.',
  },
  {
    icon: Mic2,
    title: 'Viva Preparation',
    description: 'Practice common viva questions, demonstrations, and explanations. Build confidence for project vivas.',
  },
  {
    icon: GraduationCap,
    title: 'Final Year Project Guidance',
    description: 'From topic selection to documentation and presentation. End-to-end support for your final year project.',
  },
  {
    icon: Users,
    title: 'One-on-One Mentoring',
    description: 'Personalized sessions tailored to your subjects, deadlines, and learning pace.',
  },
]

export default function AssignmentsSupport() {
  return (
    <>
      <PageHero
        title="Assignments & Academic Support"
        subtitle="College assignments, project support, viva preparation, and final year project guidance—with one-on-one mentoring."
      />

      <Section
        title="How We Help"
        subtitle="Targeted academic support so you stay on track and perform better."
        className="bg-brand-bgAlt"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Assignment Support
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
