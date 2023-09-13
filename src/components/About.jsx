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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat saepe veritatis aut illo! Maiores iste aliquam, in, eaque iure cumque consectetur repellat, odio eveniet deserunt quae doloribus. Nesciunt sint voluptatibus rerum architecto error consequatur, eum corrupti vitae enim expedita, molestias, cumque exercitationem illum non nulla nihil neque deleniti eos.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About
