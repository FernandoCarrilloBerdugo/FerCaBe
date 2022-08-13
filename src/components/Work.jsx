import React from 'react'
import club from '../assets/henryclub.png'
import vgapp from '../assets/vgapp.png'

export default function Work() {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#C63535]'>Projects</p>
          <p className='py-6'>React JS Applications</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
        {/* <div className='grid grid-cols-1 gap-4'> */}

          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${club})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>

              {/* Hover Effects */}
            <div
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[300px] sm:h-[250px] content-div'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Sports Club Site
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://club-henry.vercel.app/' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/FernandoCarrilloBerdugo/HenryClubDeploy' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Code</button>
                  </a>

                </div>
              </div>
            </div>
          </div>

           {/* Grid Item */}
           <div style={{ backgroundImage: `url(${vgapp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto w-full img-div'>

              {/* Hover Effects */}
            <div
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[300px] sm:h-[250px] content-div'>
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Videogame Library
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://videogame-pi.vercel.app/' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/FernandoCarrilloBerdugo/PI-Videogames' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Code</button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
