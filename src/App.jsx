import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Pricing from './pages/Pricing.jsx'
import ServiceLanding from './pages/ServiceLanding.jsx'
import {SERVICES} from './data/services.js'
export default function App({pathname}) {
 const browserPath=typeof window!=='undefined'?window.location.pathname:'/'
 const currentPath=(pathname||browserPath).replace(/\/+$/,'')||'/'
 const selected=SERVICES.find((s)=>currentPath==='/'+s.slug)
 const pricing=currentPath==='/pricing'
 return <div><Navbar/><main>{selected?<ServiceLanding service={selected}/>:pricing?<Pricing pathname={currentPath}/>:<><Hero/><Stats/><Services/><Pricing pathname={currentPath}/><About/><Contact/></>}</main><Footer/></div>
}