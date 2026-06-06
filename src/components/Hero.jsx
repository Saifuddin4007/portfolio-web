import React from 'react';
import { motion } from 'framer-motion';
import AnimatedName from './AnimatedName';
import InterestsRotator from './InterestsRotator';

const Hero = () => {
    return (
        <div id='home' className='px-8 md:px-32 flex flex-col min-h-screen w-full items-center justify-center py-28'>
            <div className='flex flex-col items-center justify-center gap-10'>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='flex md:max-w-[720px] flex-col items-center justify-center gap-4 text-center'
                >
                    <span className='inline-flex items-center gap-2 text-sm text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 font-medium'>
                        <span className='w-2 h-2 rounded-full bg-indigo-400 animate-pulse' />
                        Open to opportunities
                    </span>

                    <div
                        className='text-3xl md:text-5xl font-bold leading-tight'
                        style={{
                            background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Hi, I'm <AnimatedName />
                    </div>

                    <h2
                        className='text-xl md:text-3xl font-light'
                        style={{
                            background: 'linear-gradient(to right, #ec4899, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        Full Stack &amp; Backend Developer
                    </h2>

                    <div className='w-10 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-pink-500' />

                    <p className='text-sm md:text-base text-gray-500 leading-relaxed max-w-lg'>
                        A CS graduate passionate about building scalable backend systems and
                        meaningful full-stack products — from REST APIs and job queues to
                        clean, responsive UIs.
                    </p>

                    <InterestsRotator />

                    {/* CTA buttons */}
                    <div className='flex flex-wrap gap-3 justify-center mt-2'
                        
                            href='/Saifuddin-Khan-Resume.pdf'
                            download='Saifuddin-Khan-Resume.pdf'
                            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white font-medium text-base rounded-xl px-6 py-3 transition-all duration-200 hover:-translate-y-0.5'
                        >
                            📄 Download Resume
                        <a
                        
                            href='#projects'
                            className='inline-flex items-center gap-2 border border-gray-300 hover:border-indigo-400 hover:text-indigo-400 text-gray-500 font-medium text-base rounded-xl px-6 py-3 transition-all duration-200 hover:-translate-y-0.5'
                        >
                            View Projects →
                        </a>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Hero;