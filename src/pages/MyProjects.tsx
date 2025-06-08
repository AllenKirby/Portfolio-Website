import { FIS, FIS1, FIS2, LMS, LMS2, LMS1 } from '../assets/Projects'
import { ProjectCard } from '../components';
import { useInView } from '../hook'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Learning Management System for National Irrigation Administration Region-4A',
    description: 'A web application designed to facilitate the management of learning resources and courses for the National Irrigation System. It includes features for course and training creation, user management, and progress tracking. My role involved developing the frontend using ReactJS and TypeScript, and integrating it with a Django backend.',
    techStack: ['React TypeScript', 'Tailwind CSS', 'Django', 'PostgreSQL'],
    link: 'https://github.com/AllenKirby/LMS',
    images: [LMS, LMS2, LMS1],
  },
  {
    title: 'Financial Information System for National Irrigation Administration Region-4A',
    description: 'A web application designed to manage financial data and transactions for the National Irrigation System. It includes features for budget tracking, expense management, financial reporting and predicting expenses for the next several months using Machine Learning. My role is focused on developing the frontend using ReactJS and some backend integration with NodeJS.',
    techStack: ['React', 'Tailwind CSS', 'NodeJS', 'Firebase', 'Python'],
    link: 'https://github.com/AllenKirby/Financial-Information-System',
    images: [FIS, FIS1, FIS2],
  },
]

const MyProjects = () => {
  const [projectTitleRef, projectTitleInView] = useInView<HTMLHeadingElement>()
  const [descriptionRef, descriptionInView] = useInView<HTMLHeadingElement>()

  return (
    <section id="projects" className="w-full h-fit p-10">
        <header className="w-full h-fit flex flex-col lg:flex-row items-center justify-center mb-4">
          <div className='w-full lg:w-2/5 lg:py-10 flex items-center justify-center'>
            <motion.h1 
              ref={projectTitleRef}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={projectTitleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='text-2xl lg:text-4xl font-extrabold uppercase bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent'
              >
                My Projects
            </motion.h1>
          </div>
          <div className='w-full lg:w-3/5 lg:py-10 flex items-center justify-center'>
            <motion.p 
              ref={descriptionRef}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={descriptionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='text-sm lg:text-lg font-medium text-center text-white'
              >
                These are the projects I developed during my college years that significantly enhanced my frontend development skills.
            </motion.p>
          </div>
        </header>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index}/>
        ))}
    </section>
  )
}

export default MyProjects