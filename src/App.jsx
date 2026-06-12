import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
