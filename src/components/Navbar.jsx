import React, { useState } from 'react';
import { BsYoutube, BsLinkedin, BsTwitterX, BsGithub } from 'react-icons/bs';
import { BiX, BiMenu } from "react-icons/bi";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
            <a href="#home" className='text-blue-400 text-3xl font-semibold transition-all duration-300 hover:opacity-100'
                style={{
                    background: 'linear-gradient(to right, #3b82f6, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Saifuddin</a>

            <ul className='hidden md:flex gap-10'>

                <li>
                    <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Tech
                    </a>
                </li>

                <li>
                    <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Contact
                    </a>
                </li>





            </ul>


            <ul className='hidden md:flex gap-5'>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                    <BsYoutube />
                </li>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
                    <a href="www.linkedin.com/in/saifuddin-khan-a38833322"><BsLinkedin /></a>
                </li>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100'>
                    <BsTwitterX />
                </li>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100'>
                    <a href="https://github.com/Saifuddin4007"><BsGithub /></a>
                </li>
            </ul>



            {isOpen ? (
                <BiX className='block md:hidden text-4xl' onClick={toggleMenu} />
            ) : (
                <BiMenu className='block md:hidden text-4xl' onClick={toggleMenu} />
            )}

            {
                isOpen && (
                    <div className={`fixed right-0 top-[85px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-900 bg-black/90 p-12 ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col  gap-5'>


                            <li>
                                <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                    Tech
                                </a>
                            </li>

                            <li>
                                <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                    Contact
                                </a>
                            </li>





                        </ul>

                        <ul className=' flex flex-wrap gap-5'>
                            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                                <BsYoutube />
                            </li>
                            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
                                <BsLinkedin />
                            </li>
                            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100'>
                                <BsTwitterX />
                            </li>
                            <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100'>
                                <BsGithub />
                            </li>
                        </ul>






                    </div>
                )
            }



        </nav>
    )
}

export default Navbar