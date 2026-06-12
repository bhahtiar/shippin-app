import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Pricing from './pages/Pricing.jsx'

export default function App() {
  const isPricingPage = window.location.pathname === '/pricing'

  return (
    <div>
      <Navbar />
      <main>
        {isPricingPage ? (
          <Pricing />
        ) : (
          <>
            <Hero />
            <Stats />
            <Services />
            <Pricing />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
