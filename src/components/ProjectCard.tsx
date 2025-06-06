import React, { useState } from 'react'

import { FaCode, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    images: string[];
}

type ProjectCardState = {
    project: Project;
    index: number
}

const ProjectCard: React.FC<ProjectCardState> = React.memo((props) => {
    const { project, index } = props;

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const previousSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % project.images.length);
    };

  return (
    <section className='w-full h-fit flex flex-col lg:flex-row gap-10 my-10'>
        {index % 2 === 0 && (
            <figure className='w-full lg:w-1/2'>
                <div className="w-full h-92 relative overflow-hidden rounded-xl flex items-center justify-center bg-white">
                    <img
                        src={project.images[currentIndex]}
                        alt="carousel"
                        className="max-h-full object-contain transition duration-500"
                    />
                    <button
                        onClick={previousSlide}
                        className="h-full w-28 flex items-center justify-center text-lg font-semibold absolute left-0 top-1/2 opacity-0 hover:opacity-50 -translate-y-1/2 p-2 transition group"
                        >
                            <span className='rounded-full border group-hover:bg-white p-5'>
                                <FaArrowLeft size={20} />
                            </span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="h-full w-28 flex items-center justify-center text-lg font-semibold absolute right-0 opacity-0 hover:opacity-50 top-1/2 -translate-y-1/2 p-2 transition group"
                        >
                            <span className='rounded-full border group-hover:bg-white p-5'>
                                <FaArrowRight size={20} />
                            </span>
                    </button>
                </div>
            </figure>
        )}
        <div className="w-full lg:w-1/2 md:p-5">
            <h2 className="text-2xl font-bold mb-2 text-secondary text-center lg:text-left">{project.title}</h2>
            <p className="mb-4 text-justify text-white text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white rounded-full text-xs">{tech}</span>
                ))}
            </div>
            <div className='w-full flex items-center lg:items-start justify-center'>
                <a href={project.link} target='_blank' className='w-full lg:w-full font-medium rounded-md border-2 px-5 py-2 my-3 border-white text-white text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-150 cursor-pointer'>
                    <FaCode size={18}/>View Code
                </a>
            </div>
        </div>
        {!(index % 2 === 0) && (
            <figure className='w-full lg:w-1/2'>
                <div className="w-full h-92 relative overflow-hidden rounded-xl flex items-center justify-center bg-white">
                    <img
                        src={project.images[currentIndex]}
                        alt="carousel"
                        className="max-h-full object-contain transition duration-500"
                    />
                    <button
                        onClick={previousSlide}
                        className="h-full w-28 flex items-center justify-center text-lg font-semibold absolute left-0 top-1/2 opacity-0 hover:opacity-50 -translate-y-1/2 p-2 transition group"
                        >
                            <span className='rounded-full border group-hover:bg-white p-5'>
                                <FaArrowLeft size={20} />
                            </span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="h-full w-28 flex items-center justify-center text-lg font-semibold absolute right-0 opacity-0 hover:opacity-50 top-1/2 -translate-y-1/2 p-2 transition group"
                        >
                            <span className='rounded-full border group-hover:bg-white p-5'>
                                <FaArrowRight size={20} />
                            </span>
                    </button>
                </div>
            </figure>
        )}
    </section>
  )
})

export default ProjectCard