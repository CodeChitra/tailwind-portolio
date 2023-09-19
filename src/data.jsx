import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
// SiMongodb
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiRedux, SiNextdotjs, SiSass, SiReactrouter } from "react-icons/si";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: 'https://codechitra.hashnode.dev/', text: 'blog' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-red-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-red-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-red-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'React Router Dom',
    icon: <SiReactrouter className='h-16 w-16 text-red-500' />,
    text: 'Mastery of React Router DOM enables seamless navigation and state management in React applications, enhancing user experiences through dynamic routing.',
  },
  {
    id: nanoid(),
    title: 'Redux.JS',
    icon: <SiRedux className='h-16 w-16 text-red-500' />,
    text: 'Proficient in Redux.js, adeptly managing state and ensuring efficient data flow in complex web applications for optimal performance.',
  },
  {
    id: nanoid(),
    title: 'Node.JS',
    icon: <FaNodeJs className='h-16 w-16 text-red-500' />,
    text: 'Skilled in Node.js, developing scalable and efficient server-side applications with JavaScript for robust and high-performance backend solutions.',
  },
  {
    id: nanoid(),
    title: 'Express JS',
    icon: <SiExpress className='h-16 w-16 text-red-500' />,
    text: 'Proficient in Express.js, efficiently building RESTful APIs and web applications with Node.js for seamless server-side functionality and routing.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-red-500' />,
    text: 'Experienced in MongoDB, adeptly designing and managing NoSQL databases to store and retrieve data for scalable and flexible applications.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-red-500' />,
    text: 'Skilled in TypeScript, ensuring type safety and enhanced code quality in web development projects for robust and maintainable codebases.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-red-500' />,
    text: 'Proficient in Tailwind CSS, creating responsive and visually appealing web interfaces with streamlined and utility-first styling.',
  },
  {
    id: nanoid(),
    title: 'SASS',
    icon: <SiSass className='h-16 w-16 text-red-500' />,
    text: 'Proficient in Sass, I enhance web projects with efficient CSS preprocessing, streamlining styling and maintaining codebase consistency for superior design.',
  },
  {
    id: nanoid(),
    title: 'Next.JS',
    icon: <SiNextdotjs className='h-16 w-16 text-red-500' />,
    text: 'Skilled in Next.js, I create optimized web applications with server-side rendering and responsive design, delivering exceptional user experiences.',
  },
];

