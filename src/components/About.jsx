import React from 'react'
import Resume from '../assets/Resume_Fernando.pdf'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#C63535]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>My name is Fernando Carrillo, I am an engineer and a</p>
            <span className='text-bold text-orange-500'>Full Stack Web Developer</span>
          </div>
          <div>
            <p>
              I live in Mexico. I enjoy using Javascript related technologies to build the FrontEnd and the
              BackEnd of Web Applications that solve real problems
            </p>
            <br />
            <p>
              You can find my projects below or you can download my resume to know more about me.
              If you think I'm a good fit for your team, feel free to contact me!
            </p>
          </div>
        </div>
        <a href={Resume} download="Resume">
          <button className='text-white border-2 hover:bg-[#C63535] hover:border-[#C63535] px-3 py-2 mt-5 mx-auto flex items-center rounded-lg'>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  )
}
