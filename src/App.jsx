import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto p-6 space-y-12">
        <Hero />
        <About />
        <Projects />
        <div className="grid md:grid-cols-2 gap-6">
          <Experience />
          <Research />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
