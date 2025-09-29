import React from 'react'
export default function About(){
  const skills = ['Python','Java','C','C++','MySQL','TensorFlow','MATLAB','Arduino','AutoCAD','Vivado','Siemens WinCC']
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold">About</h3>
        <p className="mt-3 text-gray-700">I am a B.Tech student at Thapar Institute of Engineering and Technology with strong interests in AI, IoT, embedded systems, and full-stack development. I enjoy translating research and prototypes into usable systems — from OCR & Braille hardware to LSTM-based NLP models.</p>

        <div className="mt-4">
          <h4 className="font-medium">Technical Skills</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map(s => <span key={s} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</span>)}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium">Soft Skills</h4>
          <p className="text-sm text-gray-600">Problem solving · Teamwork · Communication · Analytical thinking · Management</p>
        </div>
      </div>

      <aside className="bg-white p-6 rounded-2xl shadow-sm">
        <h4 className="font-semibold">Education</h4>
        <p className="mt-2 text-sm text-gray-700">B.Tech, Electronics & Communication — Thapar Institute (CGPA: 8.03/10)</p>
        <p className="mt-3 text-sm text-gray-600">Pinegrove School (12th: 85.8%)</p>
      </aside>
    </section>
  )
}
