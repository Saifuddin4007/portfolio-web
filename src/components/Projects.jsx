import React from 'react';
import image1 from '../assets/expense-tracker_1.png';
import image2 from '../assets/realstate-website.png';
import image3 from '../assets/3D-Animation_Page.png';
import {motion} from 'framer-motion';

const projectData = [
  {
    image: image1,
    title: "Expense Tracker",
    description: "A expense tracker web app for desktop uses only. All CRUD operations can be performed in this web app. Use to track transactions and store all details. For backend Firebase database firestore is used.",
    technologies: ['React', 'Tailwindcss', 'Firebase Auth', 'Firebase CRUD'],
  },
  {
    image: image2,
    title: "Realstate Website",
    description: "A responsive and attractive realstate website Uer Interface and landing page by using reactJs, tailwindcss, framer motion .",
    technologies: ['React', 'Tailwindcss', 'framer motion'],
  },
  {
    image: image3,
    title: "3D Animation Landing Page",
    description: "A 3D Animation landing page to showcase the animation and design",
    technologies: ['React', 'Tailwindcss', 'Spline'],
  },
];

const ProjectCards = ({ project }) => {
  return (
    <Scroll>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} alt={project.title} className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' />
      <div className='flex flex-col gap-3'>
        <div className='text-xl font-semibold'>{project.title}</div>
        <p className='text-gray-400'>{project.description}</p>
        <div className='flex flex-wrap gap-5'>
          {project.technologies.map((val, ind) => (
            <span key={ind} className='rounded-lg bg-black p-3'>
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
    </Scroll>
  );
};

const Scroll = ({children}) =>{
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}>

      {children}
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <Scroll>
        <h1 className='text-4xl font-light text-white md:text-6xl' style={{
                    backgroundImage: 'linear-gradient(to right, #6366f1, #3b82f6, #64748b)', // indigo to blue to slate
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>My Projects</h1>
      </Scroll>
      <div className='flex w-full max-w-[1200px] flex-col gap-16 text-white'>
        {projectData.map((project, ind) => (
          <ProjectCards key={ind} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
