import { HTML, CSS, JavaScript, TailwindCSS, ReactJS, TypeScript, NodeJS, ExpressJS, MongoDB, Firebase, GIT, Github, SQL
 } from '../assets/skills/'
import { SkillCard } from '../components/'
import { useDelayedValue, useInView } from '../hook';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion'


const mySkills = [
    {
        name: "JavaScript",
        percentage: 80,
        icon: JavaScript,
        type: "frontend"
    },
    {
        name: "SQL",
        percentage: 55,
        icon: SQL,
        type: "backend"
    },
    {
        name: "HTML",
        percentage: 87,
        icon: HTML,
        type: "frontend"
    },
    {
        name: "CSS",
        percentage: 85,
        icon: CSS,
        type: "frontend"
    },
    {
        name: "JavaScript",
        percentage: 80,
        icon: JavaScript,
        type: "frontend"
    },
    {
        name: "TypeScript",
        percentage: 80,
        icon: TypeScript,
        type: "frontend"
    },
    {
        name: "React",
        percentage: 78,
        icon: ReactJS,
        type: "frontend"
    },
    {
        name: "Tailwind CSS",
        percentage: 85,
        icon: TailwindCSS,
        type: "frontend"
    },
    {
        name: "Node.js",
        percentage: 74,
        icon: NodeJS,
        type: "backend"
    },
    {
        name: "Express.js",
        percentage: 74,
        icon: ExpressJS,
        type: "backend"
    },
    {
        name: "MongoDB",
        percentage: 70,
        icon: MongoDB,
        type: "backend"
    },
    {
        name: "Firebase",
        percentage: 95,
        icon: Firebase,
        type: "backend"
    },
    {
        name: "Git",
        percentage: 80,
        icon: GIT,
        type: "tool"
    },
    {
        name: "Github",
        percentage: 80,
        icon: Github,
        type: "tool"
    },
]

const Skills = () => {
    const [skillsTitleRef, skillsTitleInView] = useInView<HTMLHeadingElement>()
    const [descriptionRef, descriptionInView] = useInView<HTMLHeadingElement>()
    const [circularProgressBar1Ref, circularProgressBar1InView] = useInView<HTMLHeadingElement>()
    const [circularProgressBar2Ref, circularProgressBar2InView] = useInView<HTMLHeadingElement>()

    const computationFE = (): number => {
        const values = mySkills.filter(tech => tech.type === 'frontend')
        let sum = 0;
        for(let i = 0; i < values.length; i++){
            sum += Number(values[i].percentage)
        }

        return sum / values.length
    }
    const computationBE = (): number => {
        const values = mySkills.filter(tech => tech.type === 'backend')
        let sum = 0;
        for(let i = 0; i < values.length; i++){
            sum += Number(values[i].percentage)
        }

        return sum / values.length
    }

    const frontendValue = computationFE()
    const backendValue = computationBE()
    const frontendDelayedValue = useDelayedValue(frontendValue, 100)
    const backendDelayedValue = useDelayedValue(backendValue, 100)

  return (
    <section id='skills' className='w-full h-fit bg-primary'>
        <div className='w-full h-1/6 flex flex-col items-center justify-center text-white text-center p-5'>
            <motion.h1 
                ref={skillsTitleRef}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={skillsTitleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='text-3xl font-extrabold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent'
                >
                    My Skills
            </motion.h1>
            <motion.p 
                ref={descriptionRef}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={descriptionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='font-medium'
                >
                    The following skills were developed throughout my college years by working on a range of academic and personal projects.
            </motion.p>
        </div>
        <div className='w-full h-5/6 p-5 flex flex-col lg:flex-row'>
            <div className='w-full lg:w-2/3 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {mySkills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
            <div className='w-full lg:w-1/3 h-full flex flex-row lg:flex-col items-center justify-center gap-4 py-5'>
                <motion.div 
                    ref={circularProgressBar1Ref}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={circularProgressBar1InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='w-full h-1/2 flex flex-col items-center justify-center gap-2'
                    >
                        <div className='w-[20vw] max-w-[150px] text-center'>
                            <CircularProgressbar 
                                value={frontendDelayedValue} 
                                text={`${Math.round(computationFE())}%`} 
                                styles={buildStyles({
                                pathColor: "#1F7600",
                                textColor: "#fff",
                                trailColor: "#0a0a0a",
                            })}/>
                        </div>
                        <h1 className='text-white text-sm md:text-md'>Frontend Development</h1>
                </motion.div>
                <motion.div 
                    ref={circularProgressBar2Ref}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={circularProgressBar2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className='w-full h-1/2 flex flex-col items-center justify-center gap-2'
                    >
                        <div className='w-[20vw] max-w-[150px] text-center'>
                            <CircularProgressbar 
                                value={backendDelayedValue} 
                                text={`${Math.round(computationBE())}%`} 
                                styles={buildStyles({
                                pathColor: "#1F7600",
                                textColor: "#fff",
                                trailColor: "#0a0a0a",
                            })}/>
                        </div>
                        <h1 className='text-white text-sm md:text-md'>Backend Development</h1>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Skills