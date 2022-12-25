import * as React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.scss'
import Hall from './views/HallVideo'
import Contact from './views/Contact'
import Journals from './views/Journals'
import Journal from './views/Journal'
import Awards from './views/Awards'
import Award from './views/Award2'
import Team from './views/Team'
import Company from './views/Company'
import Projects from './views/Projects'
import Project from './views/Project'
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
        <Route path="journals" element={<Journals />} />
        <Route path="journals/:id" element={<Journal />} />
        <Route path="awards" element={<Awards />} />
        <Route path="awards/:id" element={<Award />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Project />} />
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
