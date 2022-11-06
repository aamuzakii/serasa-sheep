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
import ParallaxParent from './views/ParallaxParent'
import NavList from './views/NavList'
import MiddlewareAbout from './views/MiddlewareAbout'

export default function App() {
  const docWidth = document.documentElement.clientWidth

  return (
    <>
      <NavList />
      <Routes>
        <Route index element={<Hall />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<MiddlewareAbout />} />
        <Route path="journal" element={<Journal />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ParallaxParent />} />
        <Route path="team" element={<About />} />
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
