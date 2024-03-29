// import heroImg from "../assets/hero.svg";
import heroImg from "../assets/hero2.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import React from 'react'

const Hero = () => {
    return (
        <div className="bg-red-100 py-24">
            <div className="cc-align-element grid md:grid-cols-2 items-center gap-8">

                <article>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-wider">I'm Akash Deep</h1>
                    <p className="mt-4 text-2xl md:text-3xl text-slate-700 capitalize tracking-wide">Front-End Developer</p>
                    <p className="mt-2 text-lg text-slate-700 tracking-wide capitalize">turning ideas into interactive reality</p>
                    <div className="flex gap-x-4 mt-4">
                        <a href="https://github.com/CodeChitra">
                            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                        <a href="www.linkedin.com/in/codechitra
">
                            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                        </a>
                    </div>
                </article>
                <article className="hidden md:block">
                    <img src={heroImg} className="h-80 lg:h-96" alt="" />
                </article>
            </div>
        </div>
    )
}

export default Hero
