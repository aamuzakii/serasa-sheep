import * as React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.scss'
import HOFDesktop from './views/HallVideoDesktop'
import HOFMobile from './views/HallVideoMobile'
import Contact from './views/Contact'
import Journals from './views/Journals'
import Journal from './views/Journal'
import Awards from './views/Awards'
import Award from './views/Award'
import Team from './views/Team'
import Company from './views/Company'
import Projects from './views/Projects'
import Construction from './views/Construction'
import Project from './views/Project'
import Chat from './views/Chat'
import NavList from './components/NavList'
import MiddlewareAbout from './components/MiddlewareAbout'
import {logEvent} from 'firebase/analytics'
import {analytics} from './firebase'

logEvent(analytics, 'user_engagement')

export default function App() {
  const docWidth = document.documentElement.clientWidth

  const blinkOnConstruction = localStorage.getItem('blinkOnConstruction')
  if (!blinkOnConstruction) localStorage.setItem('blinkOnConstruction', 'on')

  return (
    <>
      <NavList />
      <Routes>
        {docWidth > 425 ? <Route index element={<HOFDesktop />} /> : <Route index element={<HOFMobile />} />}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<MiddlewareAbout />} />
        <Route path="journals" element={<Journals />} />
        <Route path="journals/:id" element={<Journal />} />
        <Route path="awards" element={<Awards />} />
        <Route path="awards/:id" element={<Award />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Project />} />
        <Route path="construction" element={<Construction />} />
        <Route path="team" element={<Team />} />
        <Route path="company" element={<Company />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

// 1000 * 1700
