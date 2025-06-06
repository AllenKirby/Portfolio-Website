import { useState } from 'react';

import { Me } from '../assets/'
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

    const navbar = (
        <>
            <li><a href="#home" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Home</a></li>
            <li><a href="#aboutme" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>About Me</a></li>
            <li><a href="#skills" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Skills</a></li>
            <li><a href="#projects" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Projects</a></li>
            <li><a href="#contact" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Contact Me</a></li>
        </>
    )

    const showNavbar = ():void => {
        setIsNavbarOpen(!isNavbarOpen)
    }

  return (
    <section id="home" className="w-full h-screen">
        <header className="relative w-full h-1/6 flex items-center justify-between text-lg font-medium px-14">
            <section className="text-white flex items-center justify-center gap-4">
                <button 
                    onClick={showNavbar}
                    className='block lg:hidden'
                    >
                        {isNavbarOpen ? <FaTimes size={18}/> : <FaBars size={18}/>}
                </button>
                <h1 className='font-extrabold text-xl md:text-2xl font-acme'>Allen <span className='text-secondary'>Kirby</span></h1>
            </section>
            <nav className='hidden lg:block'>
                <ul className="flex gap-4 text-white text-sm">
                    {navbar}
                </ul>
            </nav>
            <div className='flex items-center justify-center gap-3'>
                <a href="https://github.com/AllenKirby" target='_blank'>
                    <FaGithub size={25} className='text-white'/>
                </a>
                <a href='https://github.com/AllenKirby' target='_blank' className='text-white text-xs hover:underline hidden lg:block'>Visit my GitHub!</a>
            </div>
            {isNavbarOpen && (
                <nav className='absolute block lg:hidden left-0 -bottom-50 w-full p-5 bg-primary'>
                    <ul className="flex flex-col items-center justify-center gap-4 text-white text-sm">
                        {navbar}
                    </ul>
                </nav>
            )}
        </header>
        <section className="w-full h-5/6 flex flex-row items-center justify-center">
            <main className="w-full lg:w-[55%] h-full flex flex-col items-center lg:items-start justify-center lg:p-10">
                    <h6 className='text-white font-bold'>Hello!</h6>
                    <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">I'm Allen Kirby V. Santileces</h1>
                    <h2 className="text-lg md:text-2xl font-semibold text-secondary">Aspiring Frontend Developer</h2>
                    <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="text-xs md:text-sm px-5 py-2 my-2 rounded-md text-white border-2 border-white bg-transparent hover:bg-white hover:text-primary transtion-all duration-150 font-semibold cursor-pointer">Download CV</button>
                    </a>
            </main>
            <figure className="w-[45%] h-full relative hidden lg:block">
                <img src={Me} alt="Allen Kirby" className='absolute h-full bottom-0'/>
            </figure>
        </section>
    </section>
  )
}

export default Home