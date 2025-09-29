import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 py-6 border-t bg-gray-50">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">Built by Piyush Goyal — © {new Date().getFullYear()}</div>
    </footer>
  )
}
