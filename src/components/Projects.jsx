import React from 'react'
const items = [
  {
    title: 'Inklude (Capstone) — OCR, Braille Hardware, 5G',
    desc: 'A 5G-enabled assistive system converting scanned notebook text into audio or solenoid-driven Braille output. Custom solenoid hardware and real-time multi-device sharing.',
    link: '#'
  },
  {
    title: 'Multi-Tenant Banking System — Full-Stack',
    desc: 'Full-stack platform with MySQL, Express.js REST APIs, responsive frontend, stored procedures, triggers and fraud detection logic.',
    link: 'https://github.com/GitUsers1221/Multi-tenant-banking-system'
  },
  {
    title: 'General Store Management — Python & MySQL',
    desc: 'A backend program to streamline store operations with MySQL backend, reducing bookkeeping errors and improving data management.',
    link: 'https://github.com/GitUsers1221/General-Store-Management-System/tree/main'
  },
  {
    title: 'Fake News Detection — Deep Learning & NLP',
    desc: 'LSTM-based classifier using Kaggle and regional datasets; NLP pipeline with tokenization, lemmatization and padding.',
    link: '#'
  }
]
export default function Projects(){
  return (
    <section id="projects">
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map(it => (
          <article key={it.title} className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">{it.title}</h4>
            <p className="mt-2 text-gray-700">{it.desc}</p>
            <div className="mt-4 flex gap-3">
              <a className="text-sm underline" href={it.link} target="_blank" rel="noreferrer">{it.link === '#' ? 'More' : 'GitHub / Link'}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
