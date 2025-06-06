import { HTML, CSS, JavaScript, TailwindCSS, ReactJS, TypeScript, NodeJS, ExpressJS, MongoDB, Firebase, GIT, Github
 } from '../assets/skills/'
import { SkillCard } from '../components/'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useDelayedValue from '../hook/useDelayedValue';

const mySkills = [
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
        percentage: 95,
        icon: GIT,
        type: "tool"
    },
    {
        name: "Github",
        percentage: 95,
        icon: Github,
        type: "tool"
    },
]

const Skills = () => {
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
            <h1 className='text-3xl font-extrabold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent'>My Skills</h1>
            <p className='font-medium'>The following skills were developed throughout my college years by working on a range of academic and personal projects.</p>
        </div>
        <div className='w-full h-5/6 p-5 flex flex-col lg:flex-row'>
            <div className='w-full lg:w-2/3 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {mySkills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
            <div className='w-full lg:w-1/3 h-full flex flex-row lg:flex-col items-center justify-center py-10'>
                <div className='w-full h-1/2 flex flex-col items-center justify-center gap-2'>
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
                    <h1 className='text-white'>Frontend Development</h1>
                </div>
                <div className='w-full h-1/2 flex flex-col items-center justify-center gap-2'>
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
                    <h1 className='text-white'>Backend Development</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills