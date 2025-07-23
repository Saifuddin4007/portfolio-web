import React from 'react';
import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
            <div className='flex flex-col items-center justify-center gap-10 text-shadow-indigo-200'>
                <motion.div 
                initial={{y: -50, opacity:0}}
                animate={{y: 0, opacity:1}}
                transition={{duration: 0.8, delay:0.3}}
                className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-cente'>

                    <h1 className='text-blue-400 text-4xl md:text-6xl font-semibold transition-all duration-300 hover:opacity-100' style={{
                    background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Saifuddin Khan</h1>


                <h3 className='text-blue-400 text-2xl md:text-4xl font-light transition-all duration-300 hover:opacity-100' style={{
                    background: 'linear-gradient(to right, #ec4899, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Web Developer
                </h3>

                <p className='md:text-base text-pretty text-sm text-gray-500 text-center'>
                    I'm a Web Developer skilled in React.Js, NodeJs, Tailwindcss and JavaScript, focused on building clean and scalable applications. From front-end design to database integration. I create efficient and scalable solutions for dynamic user experiences.
                </p>
                    
                </motion.div>

            </div>

        </div>
    )
}

export default Hero