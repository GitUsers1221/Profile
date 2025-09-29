import React from 'react'
export default function Contact(){
  return (
    <section id="contact" className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold">Contact</h3>
      <p className="mt-2 text-gray-700">Email: <a href="mailto:piyushgoyal1504@gmail.com" className="underline">piyushgoyal1504@gmail.com</a></p>
      <p className="mt-1 text-gray-700">Phone: <a href="https://api.whatsapp.com/send/?phone=6230024064&text&type=phone_number&app_absent=0" className="underline">+91 62300 24064</a></p>

      <form className="mt-4 grid gap-3 md:grid-cols-2" onSubmit={(e)=>{e.preventDefault();alert('Message sent (demo)')}}>
        <input name="name" className="p-3 border rounded-md" placeholder="Your name" />
        <input name="email" className="p-3 border rounded-md" placeholder="Your email" />
        <textarea name="message" className="p-3 border rounded-md md:col-span-2" rows={4} placeholder="Message"></textarea>
        <button className="md:col-span-2 px-4 py-2 bg-blue-600 text-white rounded-md">Send Message</button>
      </form>
    </section>
  )
}
