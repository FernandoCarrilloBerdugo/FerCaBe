import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import gif from '../assets/welcome.gif'
import { Link } from 'react-scroll'


export default function Home() {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <img style={{ width: '200px', marginLeft: "-13px" }} src={gif} />
        <p className='text-[#C63535]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Fernando Carrillo</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Full Stack Developer with experience in designing, building and deploying of web application using technologies related to Javascript. </p>
        <div>
          <Link to="about" smooth={true} duration={500} >
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C63535] hover:border-[#C63535]'>About me
              <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
