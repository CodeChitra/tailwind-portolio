import React from 'react'
import ProjectCard from './ProjectCard'
import SectionTitle from "./SectionTitle";
import { projects } from "../data";
const Projects = () => {
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
