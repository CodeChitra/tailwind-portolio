import React from 'react'
// import aboutImg from "../assets/about.svg";
import aboutImg from "../assets/about2.svg";
import SectionTitle from './SectionTitle';
const About = () => {
    return (
        <section id='about' className='bg-white py-20'>
            <div className='cc-align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutImg} alt="About Me" className='w-full h-64' />
                <article>
                    <SectionTitle text="About Me" />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        I'm a passionate front-end developer with a mission to make a lasting impact in the web development community and beyond. With a keen eye for design and a knack for crafting seamless user experiences, I bring websites to life. My dedication to staying at the forefront of web technologies, combined with my expertise in JavaScript, React.js, and responsive design, allows me to create visually stunning and highly functional web applications. I thrive on challenges and am eager to collaborate with organizations that share my commitment to innovation and excellence in the digital realm. Let's build the web of tomorrow together.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About
