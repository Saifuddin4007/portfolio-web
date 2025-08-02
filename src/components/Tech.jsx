import React from 'react';
import { RiJavascriptFill, RiReactjsLine, RiHtml5Fill, RiCss3Fill, RiTailwindCssFill, RiNextjsFill, RiNodejsLine, RiGithubFill } from "react-icons/ri";


const Tech = () => {
    return (
        <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 md:gap-16 transition-all duration-500 ease-in-out'>
            <h1
                className="text-5xl font-light md:text-7xl"
                style={{
                    backgroundImage: 'linear-gradient(to right, #6366f1, #3b82f6, #64748b)', // indigo to blue to slate
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Technologies
            </h1>



            <div className="flex flex-col md:flex-row md:w-[1000px] gap-10 transition-all duration-500 ease-in-out">
                {/* Frontend Container */}
                <div className="w-[90vw] max-w-[350px] h-[200px] md:w-[500px] md:h-[200px] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-xl relative overflow-hidden transition-all duration-500 ease-in-out">


                    <RiHtml5Fill className="w-12 h-12 absolute top-[8%] left-[10%] animate-[float1_6s_ease-in-out_infinite] opacity-80 text-orange-500" />
                    <RiCss3Fill className="w-12 h-12 absolute top-[25%] left-[65%] animate-[float2_7s_ease-in-out_infinite] opacity-80 text-sky-400" />
                    <RiJavascriptFill className="w-12 h-12 absolute top-[55%] left-[40%] animate-[float3_5s_ease-in-out_infinite] opacity-80 text-yellow-400" />
                    <RiReactjsLine className="w-12 h-12 absolute top-[50%] left-[10%] animate-[float4_8s_ease-in-out_infinite] opacity-80 text-sky-600" />
                    <RiTailwindCssFill className="w-12 h-12 absolute top-[18%] left-[75%] animate-[float5_6s_ease-in-out_infinite] opacity-80 text-blue-400" />
                    <RiNextjsFill className="w-12 h-12 bg-white p-1 rounded-full absolute top-[75%] left-[25%] animate-[float6_7s_ease-in-out_infinite] opacity-80" />
                    <img src="/gsap2.png" className="w-12 h-12 absolute top-[35%] left-[20%] animate-[float8_6s_ease-in-out_infinite] opacity-80" />
                </div>

                {/* Divider and Labels */}
                <div className="flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
                    {/* Desktop label and vertical divider */}
                    <div className="hidden md:flex flex-col items-center gap-2 transition-all duration-500 ease-in-out">
                        <div className="flex items-center gap-2">
                            <span className="text-white text-2xl">Frontend</span>
                            <span className="text-sm text-white">|</span>
                            <span className="text-white text-2xl">Backend</span>
                        </div>
                        <div className="w-[1px] h-[160px] bg-white/30"></div>
                    </div>
                    {/* Mobile horizontal divider and label */}
                    <div className="flex flex-col items-center gap-2 md:hidden transition-all duration-500 ease-in-out">
                        <span className="text-white text-xl">Frontend</span>
                        <div className="w-[60px] h-[1px] bg-white/30"></div>
                        <span className="text-white text-xl">Backend</span>
                    </div>
                </div>

                {/* Backend Container */}
                <div className="w-[90vw] max-w-[350px] h-[200px] md:w-[500px] md:h-[200px] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-xl relative overflow-hidden transition-all duration-500 ease-in-out">


                    <RiNodejsLine className="w-12 h-12 absolute top-[8%] left-[10%] animate-[float1_6s_ease-in-out_infinite] opacity-80 text-green-300" />
                    <img src='/ex2.png' className="w-12 h-12 absolute top-[25%] left-[65%] animate-[float2_7s_ease-in-out_infinite] opacity-80" />
                    <img src='/MongoDB.png' className="w-12 h-12 absolute top-[55%] left-[40%] animate-[float3_5s_ease-in-out_infinite] opacity-80" />
                    <img src='/sql.png' className="w-12 h-12 absolute top-[50%] left-[10%] animate-[float4_8s_ease-in-out_infinite] opacity-80" />
                </div>
            </div>

            {/* Other Tools and Tech Section */}
            <h2 className="text-2xl font-medium mt-8 mb-4">Other Tools and Tech</h2>
            <div className="w-[90vw] max-w-[350px] h-[200px] md:w-[500px] md:h-[200px] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-xl relative overflow-hidden transition-all duration-500 ease-in-out">


                <RiGithubFill className="w-12 h-12 absolute top-[8%] left-[10%] animate-[float1_6s_ease-in-out_infinite] opacity-80 text-orange-500" />
                <img src='/cpp.png' className="w-12 h-12 absolute top-[25%] left-[65%] animate-[float2_7s_ease-in-out_infinite] opacity-80" />
                <img src='/c.png' className="w-12 h-12 absolute top-[55%] left-[40%] animate-[float3_5s_ease-in-out_infinite] opacity-80" />
                <img src='/docker.png' className="w-12 h-12 absolute top-[50%] left-[10%] animate-[float4_8s_ease-in-out_infinite] opacity-80" />
                <img src='/firebase.png' className="w-12 h-12 absolute top-[18%] left-[75%] animate-[float5_6s_ease-in-out_infinite] opacity-80" />
            </div>




        </div>

    )
}

export default Tech