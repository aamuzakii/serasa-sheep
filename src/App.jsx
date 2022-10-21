import * as React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.scss'
import Home from './views/Home'
import Hall from './views/HallVideo'
import Contact from './views/Contact'
import Journal from './views/Journal'
import About from './views/About'
import Zepto from './views/Zepto'
import Projects from './views/Projects'
import Project from './views/Project'
import NavList from './views/NavList'

export default function App() {
  return (
    <>
      <NavList />
      <Routes>
        <Route index element={<Hall />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="journal" element={<Journal />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Project />} />
        <Route path="about" element={<Zepto />} />
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
