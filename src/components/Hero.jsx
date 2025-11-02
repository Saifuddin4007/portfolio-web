import React from 'react';
import { motion } from 'framer-motion';
import AnimatedName from './AnimatedName';
import InterestsRotator from './InterestsRotator';

const Hero = () => {
    return (
        <div id='home' className='px-16 flex flex-col min-h-screen w-full items-center justify-center py-28 md:px-32'>
            <div className='flex flex-col items-center justify-center gap-10 text-shadow-indigo-200'>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='flex md:max-w-[800px] flex-col items-center justify-center gap-3 text-cente'>

                    <div className='text-blue-400 text-3xl md:text-5xl font-semibold transition-all duration-300 hover:opacity-100' style={{
                        background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}> Hii I'm <AnimatedName /> </div>


                    <h3 className='text-blue-400 text-2xl md:text-4xl font-light transition-all duration-300 hover:opacity-100' style={{
                        background: 'linear-gradient(to right, #ec4899, #3b82f6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Tech Enthusiast
                    </h3>

                    <p className='md:text-base text-pretty text-sm text-gray-500 text-center'>
                        A dedicated Tech Enthusiast aiming to grow as a skilled fullstack developer and build meaningful digital products.
                    </p>
                    <div>
                        <InterestsRotator />
                    </div>

                </motion.div>

            </div>

           <a 
                 href="sk-resume.pdf" 
                 download="Saifuddin-Khan-Resume.pdf"
                 className='bg-blue-400 hover:bg-blue-500 rounded-xl p-3 mt-5 font-medium text-white text-xl transition-colors duration-300 inline-block text-center'
             >
                 📄 Download Resume
             </a>

        </div>
    )
}

export default Hero