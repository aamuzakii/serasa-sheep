import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import Hall from './views/HallVideo'
import Contact from './views/Contact'
import Journals from './views/Journals'
import Journal from './views/Journal'
import Team from './views/Team2'
import TeamMobile from './views/TeamMobile'
import Company from './views/Company'
import Projects from './views/Projects'
import ParallaxParent from './views/ParallaxParent'
import NavList from './components/NavList'
import MiddlewareAbout from './components/MiddlewareAbout'

export default function App() {

  return (
    <>
      <NavList />
      <Routes>
        <Route index element={<Hall />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<MiddlewareAbout />} />
        <Route path="journal" element={<Journals />} />
        <Route path="journal/:id" element={<Journal />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ParallaxParent />} />
        <Route path="team" element={<Team />} />
        <Route path="company" element={<Company />} />
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
