import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
