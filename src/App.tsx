import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Principles } from './components/Principles'
import { Work } from './components/Work'

function App() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="font-display text-3xl font-extrabold">
          moxie<span className="text-tangerine">*</span>
        </a>
        <nav className="flex items-center gap-6 font-medium">
          <a href="#work" className="hidden hover:underline decoration-2 underline-offset-4 sm:inline">Work</a>
          <a href="#contact" className="btn !py-2">Contact</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Principles />
      </main>
      <Footer />
    </>
  )
}

export default App
