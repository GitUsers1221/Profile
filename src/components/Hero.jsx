import React from 'react'
export default function Hero(){
  return (
    <section className="grid gap-6 md:grid-cols-3 md:items-center bg-white p-6 rounded-2xl shadow-sm">
      <div className="md:col-span-2">
        <h2 className="text-3xl sm:text-4xl font-bold">Hi — I’m Piyush.</h2>
        <p className="mt-3 text-gray-700">B.Tech in Electronics & Communication (Thapar Institute) — building AI, IoT & automation systems. Winner, 5G Innovation Hackathon (DoT). I build full-stack apps and assistive hardware for real-world impact.</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm" href="mailto:piyushgoyal1504@gmail.com">Email</a>
          <a className="px-4 py-2 rounded-lg border border-gray-200 text-sm" href="https://github.com/GitUsers1221" target="_blank" rel="noreferrer">GitHub</a>
          <a className="px-4 py-2 rounded-lg border border-gray-200 text-sm" href="http://www.linkedin.com/in/piyush-goyal-a4b646265" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="px-4 py-2 rounded-lg border border-gray-200 text-sm" href="https://drive.google.com/file/d/1bA-Vxbm6kMIYb1jC9yujaZYC0j5rGPwJ/view?usp=sharing" target="_blank" rel="noreferrer">Resume (PDF)</a>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-green-300 to-blue-300 flex items-center justify-center text-white font-bold shadow-lg">PG</div>
      </div>
    </section>
  )
}
