import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Resume from '../assets/Resume_Fernando.pdf'
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll'
import swal from 'sweetalert'

export default function Navbar() {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const copyText = () => {
    navigator.clipboard.writeText("fernandoh.cabe@gmail.com")
    swal({
      title: "Success",
      text: "Mail copied to clipboard.\n\nHope to hear from you soon!",
      icon: "success",
      timer: 2000,
    })
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50 border-b-2 border-[#C63535]'>
      <div>
        <img src={Logo} alt="Logo" style={{ width: '60px' }} />
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} >
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <div>
          <ul >
            <li className='py-6 text-4xl'>
              <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                About
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                Skills
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to="work" smooth={true} duration={500} onClick={handleClick}>
                Projects
              </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>
          <div className='flex flex-row justify-between items-center mt-[10px] py-4'>
            <a href='https://www.linkedin.com/in/fercabe/' target="_blank">
            <FaLinkedin size={50}/>
            </a>
            <a href='https://github.com/FernandoCarrilloBerdugo' target="_blank">
            <FaGithub size={50} />
            </a>
          </div>
        </div>
      </div>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/fercabe/' target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/FernandoCarrilloBerdugo' target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              // href='/'
              onClick={copyText}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={Resume} download="Resume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
