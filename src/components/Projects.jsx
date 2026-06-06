import React from 'react';
import image1 from '../assets/async_doc.jpeg';
import image2 from '../assets/github.png';
import image3 from '../assets/event.png';
import image4 from '../assets/expense-tracker_1.png';
import { motion } from 'framer-motion';

const projectData = [
  {
    image: image1,
    title: "Async Document Processing System",
    description: `Architected a scalable background job processing system using BullMQ and Redis for async task queues, with PostgreSQL as persistent storage — fully containerised with Docker Compose for consistent local and production environments.
    Built a RESTful Express.js API with Multer-powered file upload handling; implemented full job lifecycle management — retry
    strategies, exponential backoff, failure event hooks, and a dedicated Status API for real-time job polling.
    Decoupled upload from processing via a dedicated queue worker to prevent request timeouts and enable horizontal scaling;
    structured codebase into isolated routes, controllers, producers, and workers following clean architecture and production-grade
    backend patterns.`,
    technologies: ['Node.js', 'Express.js', 'BullMQ', 'Redis', 'PostgreSQL', 'Docker', 'Multer'],
  },

  {
    image: image2,
    title: "GitHub Automation CLI Tool",
    description: `Built and published a Node.js CLI tool that automates Git repository setup, commit staging, and deployment workflows, eliminating
    repetitive manual steps.
    Integrated the GitHub REST API for automated remote repository creation directly from the terminal.
    Designed a multi-command interface with rollback on failure, partial commit support, and interactive user prompts; followed clean
    code principles with thorough documentation and inline error handling.`,
    technologies: ['Node.js', 'GitHub REST API', 'npm'],
  },
  {
    image: image3,
    title: "Event Booking Fullstack MERN Web App",
    description: `Built a production-ready event booking platform using the MERN stack with JWT-based authentication and protected routes.
    Implemented OTP-based email verification via Brevo for secure user registration and booking confirmation; debugged and
    resolved complex async issues across the auth and booking flow.
    Developed separate user and admin dashboards; designed a fully responsive UI with React.js and Tailwind CSS; built RESTful
    APIs with Express and Mongoose following REST best practices.`,
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
  },

  {
    image: image4,
    title: "Expense Tracker",
    description: `Built a responsive expense tracking web app with Firebase Firestore for real-time sync, Firebase Authentication for secure login,
    and a clean accessible UI optimised for desktop and mobile; debugged performance bottlenecks to ensure smooth cross-device
    experience.`,
    technologies: ['React.js', 'Firebase', 'Tailwind CSS'],
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

const Scroll = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>

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
