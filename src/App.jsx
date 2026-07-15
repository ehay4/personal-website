import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="topbar-name" href="#top">
          Eric Hay
        </a>
        <nav className="topbar-nav">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Eric Hay</p>
        <p>React + Vite</p>
      </footer>
    </div>
  )
}

export default App
