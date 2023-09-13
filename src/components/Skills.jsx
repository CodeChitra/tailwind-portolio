import React from 'react'
import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
    return (
        <section id='skills' className='py-20 cc-align-element'>
            <SectionTitle text="tech stack" />
            <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {skills.map(skill => <SkillsCard key={skill.id} {...skill} />)}
            </div>
        </section>
    )
}

export default Skills
