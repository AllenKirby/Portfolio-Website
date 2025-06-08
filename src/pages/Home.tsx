import { useState } from 'react';
import { motion } from 'framer-motion'
import { Me } from '../assets/'
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useInView } from '../hook';

const Home = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
    
    const [logoRef, logoInView] = useInView<HTMLHeadingElement>()
    const [burgerRef, burgerInView] = useInView<HTMLButtonElement>()
    const [navigationRef, navigationInView] = useInView<HTMLElement>()
    const [githubRef, githubInView] = useInView<HTMLDivElement>()
    const [navbarRef,] = useInView<HTMLDivElement>()
    const [helloRef, helloInView] = useInView<HTMLHeadingElement>()
    const [nameRef, nameInView] = useInView<HTMLHeadingElement>()
    const [roleRef, roleInView] = useInView<HTMLHeadingElement>()
    const [downloadRef, downloadInView] = useInView<HTMLAnchorElement>()
    const [imageRef, imageInView] = useInView<HTMLElement>()

    const navbar = (
        <>
            <li><a href="#home" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Home</a></li>
            <li><a href="#aboutme" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>About Me</a></li>
            <li><a href="#skills" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Skills</a></li>
            <li><a href="#projects" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Projects</a></li>
            <li><a href="#contact" className='hover:font-medium hover:border-b-2 hover:border-secondary hover:text-secondary transition-all duration-300'>Contact Me</a></li>
        </>
    )

    const showNavbar = ():void => setIsNavbarOpen(!isNavbarOpen)

  return (
    <section id="home" className="w-full h-screen">
        <header className="relative w-full h-1/6 flex items-center justify-between text-lg font-medium px-14">
            <section className="text-white flex items-center justify-center gap-4">
                <motion.button 
                    ref={burgerRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={burgerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onClick={showNavbar}
                    className='block lg:hidden'
                    >
                        {isNavbarOpen ? <FaTimes size={18}/> : <FaBars size={18}/>}
                </motion.button>
                <motion.h1 
                    ref={logoRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={logoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='font-extrabold text-xl md:text-2xl font-acme'>
                    Allen <span className='text-secondary'>Kirby</span>
                </motion.h1>
            </section>
            <motion.nav 
                ref={navigationRef}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={navigationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='hidden lg:block'>
                <ul className="flex gap-4 text-white text-sm">
                    {navbar}
                </ul>
            </motion.nav>
            <motion.div 
                ref={githubRef}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={githubInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='flex items-center justify-center gap-3'>
                <a href="https://github.com/AllenKirby" target='_blank'>
                    <FaGithub size={25} className='text-white'/>
                </a>
                <a href='https://github.com/AllenKirby' target='_blank' className='text-white text-xs hover:underline hidden lg:block'>Visit my GitHub!</a>
            </motion.div>
            {isNavbarOpen && (
                <>  
                    <div className='fixed inset-0 z-20' onClick={showNavbar} />
                    <motion.nav
                        ref={navbarRef}
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='absolute block lg:hidden left-0 z-40 -bottom-50 w-full p-5 bg-primary'
                        >
                            <ul className="flex flex-col items-center justify-center gap-4 text-white text-sm">
                                {navbar}
                            </ul>
                    </motion.nav>
                </>
            )}
        </header>
        <section className="w-full h-5/6 flex flex-row items-center justify-center">
            <main className="w-full lg:w-[55%] h-full flex flex-col items-center lg:items-start justify-center lg:p-10">
                <motion.h6 
                    ref={helloRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={helloInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='text-white font-bold'
                    >
                        Hello!
                </motion.h6>
                <motion.h1 
                    ref={nameRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={nameInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent"
                    >
                        I'm Allen Kirby V. Santileces
                </motion.h1>
                <motion.h2 
                    ref={roleRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={roleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-lg md:text-2xl font-semibold text-secondary"
                    >
                        Aspiring Frontend Developer
                </motion.h2>
                <motion.a  
                    ref={downloadRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={downloadInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    href="/CV.pdf" target="_blank" rel="noopener noreferrer"
                    >
                        <button className="text-xs md:text-sm px-5 py-2 my-2 rounded-md text-white border-2 border-white bg-transparent hover:bg-white hover:text-primary transtion-all duration-150 font-semibold cursor-pointer">Download CV</button>
                </motion.a>
            </main>
            <motion.figure
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-[45%] h-full relative hidden lg:block">
                <img src={Me} alt="Allen Kirby" className='absolute h-full bottom-0'/>
            </motion.figure>
        </section>
    </section>
  )
}

export default Home