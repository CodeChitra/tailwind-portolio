import React from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from "./SectionTitle";
import useFetchProjects from '../custom-hook/fetchProjects';
const Projects = () => {
    const { isLoading, projects } = useFetchProjects();

    if (isLoading) {
        return <section id='projects' className='py-20 cc-align-element'>
            <SectionTitle text="web creations" />
            <h2 className='mt-4 font-medium text-red-400'>Please Wait Projects Are Loading...</h2>
        </section>
    }


    return (
        <section id='projects' className='py-20 cc-align-element'>
            <SectionTitle text="web creations" />
            <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {projects.map(project => <ProjectCard key={project.id} {...project} />)}
            </div>
        </section>
    )
}

export default Projects
