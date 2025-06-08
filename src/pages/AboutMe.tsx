import { Lottie } from "../components"
import { Me, Goal } from '../assets/JSON'

import { motion } from 'framer-motion'

import { useInView } from '../hook'

const AboutMe = () => {
    const [aboutMeRef, aboutMeInView] = useInView<HTMLDivElement>()
    const [lottie1Ref, lottie1InView] = useInView<HTMLElement>()
    const [mainContent1Ref, mainContent1InView] = useInView<HTMLDivElement>()
    const [lottie2MobileRef, lottie2MobileInView] = useInView<HTMLElement>()
    const [lottie2DesktopRef, lottie2DesktopInView] = useInView<HTMLElement>()
    const [mainContent2Ref, mainContent2InView] = useInView<HTMLDivElement>()

  return (
    <section id="aboutme" className="w-full h-fit">
        <motion.div 
            ref={aboutMeRef}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={aboutMeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full h-fit flex items-center justify-start gap-4 p-4"
            >
                <div className="border-2 border-white w-1/5" />
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">About Me</h1>
        </motion.div>
        <main className="w-full h-full flex flex-col py-5">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center">
                <motion.figure 
                    ref={lottie1Ref}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={lottie1InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full lg:w-1/2 h-full flex items-center justify-center"
                    >
                        <Lottie lottieProp={Me}/>
                </motion.figure>
                <motion.div 
                    ref={mainContent1Ref}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={mainContent1InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full lg:w-1/2 p-10"
                    >
                        <h2 className="text-2xl text-secondary font-bold text-right">Who I am?</h2>
                        <p className="text-justify text-white">Hi! I'm Allen Kirby — an aspiring Frontend Developer from Laguna, passionate about building clean, user-friendly interfaces. I recently graduated from Laguna University with a Bachelor of Science in Computer Science, specializing in Data Science (Class of 2025). Throughout college, I consistently took on the role of Frontend Developer in our projects. While design can be a challenge at times, I genuinely enjoy crafting interfaces and continuously work on improving both my technical skills and eye for design.</p>
                </motion.div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center">
                <motion.figure
                    ref={lottie2MobileRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={lottie2MobileInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }} 
                    className="flex w-1/2 h-full lg:hidden items-center justify-center"
                    >
                        <Lottie lottieProp={Goal}/>
                </motion.figure>
                <motion.div 
                    ref={mainContent2Ref}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={mainContent2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full lg:w-1/2 p-10"
                    >
                        <h2 className="w-fit text-2xl text-secondary font-bold">My Goal</h2>
                        <p className="text-justify text-white">My goal is to become a skilled and reliable Frontend Developer who consistently contributes to meaningful projects and delivers high-quality results — because building interfaces is something I genuinely enjoy. I'm also passionate about exploring more of my dream role in the IT industry, continually learning and growing to become the best version of myself in this field. In addition, I'm expanding my skill set into Backend Development, and have started working with tools like Node.js and Firebase to understand full-stack workflows and improve how I build applications.</p>
                </motion.div>
                <motion.figure
                    ref={lottie2DesktopRef}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={lottie2DesktopInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }} 
                    className="hidden w-1/2 h-full lg:flex items-center justify-center"
                    >
                        <Lottie lottieProp={Goal}/>
                </motion.figure>
            </div>
        </main>
    </section>
  )
}

export default AboutMe