import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './views/Home'
import Hall from './views/Hall'
import Contact from './views/Contact'
import Journal from './views/Journal'
import About from './views/About'
import NavList from './views/NavList'

export default function App() {
  return (
      <>
        
        <NavList/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Hall" element={<Hall />} />
          <Route path="contact" element={<Contact />} />
          <Route path="journal" element={<Journal />} />
          <Route path="about" element={<About />} />
        </Routes>
      </>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
