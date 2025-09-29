import React from 'react'
export default function Header(){
  return (
    <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-extrabold">Piyush Goyal</h1>
        <p className="text-sm text-gray-600">Electronics & Communication · Full-Stack & AI · 5G Innovator</p>
      </div>
      <nav className="space-x-4 text-sm">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#research" className="hover:underline">Research</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}
