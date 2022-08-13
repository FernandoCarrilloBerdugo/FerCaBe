import React from 'react'
import Javascript from '../assets/javascript.png'
import Express from '../assets/Express.png'
import CSS from '../assets/css.png'
import Github from '../assets/github.png'
import HTML from '../assets/html.png'
import Node from '../assets/node.png'
import REACT from '../assets/react.png'
import Redux from '../assets/Redux.png'
import Git from '../assets/git.png'
import PostgreSQL from '../assets/postgresql.png'

export default function Skills() {
  return (
    <div name="skills" className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#C63535] py-1'>My toolbox</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="html icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="css icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="javascript icon" />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={REACT} alt="react icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Redux} alt="redux icon" />
            <p className='my-4'>Redux</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="node icon" />
            <p className='my-4'>Node</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-60 mx-auto' src={Express} alt="express icon" />
            <p className='my-4'>Express</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt="github icon" />
            <p className='my-4'>Github</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt="git icon" />
            <p className='my-4'>Git</p>
          </div>
          <div className='hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={PostgreSQL} alt="postgre sql icon" />
            <p className='my-4'>PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}
