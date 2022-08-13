import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/d51bb1a7-9a9d-48cc-9ed5-4545b16f03c9" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#C63535] text-gray-300'>Contact</p>
          <p className='text-gray-300 mt-4'>Submit the form below or send me an email at:</p>
          <span className='text-orange-500'>fernandoh.cabe@gmail.com</span>
        </div>
        <input className=' p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name="name" />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name="email" />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#C63535] hover:border-[#C63535] px-3 py-2 mt-2 mx-auto flex items-center'>Send</button>
      </form>
    </div>
  )
}
