import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import InterviewPrep from './pages/InterviewPrep'
import JobReadiness from './pages/JobReadiness'
import ResumePrep from './pages/ResumePrep'
import CommunicationSkills from './pages/CommunicationSkills'
import AssignmentsSupport from './pages/AssignmentsSupport'
import Classes from './pages/Classes'
import StudyPlan from './pages/StudyPlan'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/interview-preparation" element={<InterviewPrep />} />
        <Route path="/job-readiness" element={<JobReadiness />} />
        <Route path="/resume-preparation" element={<ResumePrep />} />
        <Route path="/communication-skills" element={<CommunicationSkills />} />
        <Route path="/assignments-support" element={<AssignmentsSupport />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/study-plan" element={<StudyPlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
