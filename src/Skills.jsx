import React from 'react';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { IoLogoReact } from 'react-icons/io5';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import "animate.css"

const Skills = () => {

    return (
        <div id='skills' className='pt-10 px-3 lg:px-0 text-white text-center'>
            <p className='lg:text-8xl md:text-6xl text-4xl my-10  shadow-cyan-300 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 via-cyan-400 to-indigo-600'>My Skills</p>
            <p>As a dedicated web developer, I possess a robust skill set that encompasses both front-end and back-end technologies, <br /> enabling me to create dynamic and responsive web applications.</p>
            <div className='flex flex-col  lg:flex-row lg:flex md:grid md:grid-cols-3  items-center  justify-center gap-10 mt-20'>
                <div className='w-min animate__bounce animate__animated animate__pulse animate__infinite  sf'>
                    <p className='p-10 df' >
                        <IoLogoReact className='icon' size={60} />

                    </p>
                    <p className='mt-5 text text-purple-600 font-semibold text-2xl'>
                        React
                    </p>
                </div>
                <div className='w-min  animate__bounce animate__animated animate__pulse animate__infinite  sf'>
                    <p className='p-10 df' >
                        <TbBrandJavascript className='iconjs' size={60} />

                    </p>
                    <p className='mt-5 text text-purple-600 font-semibold text-2xl'>
                        JavaScript
                    </p>
                </div>
                <div className='w-min  animate__bounce animate__animated animate__pulse animate__infinite  sf'>
                    <p className='p-10 df' >
                        <SiTailwindcss className='icontail' size={60} />

                    </p>
                    <p className='mt-5 text text-purple-600 font-semibold text-2xl'>
                        Tailwind
                    </p>
                </div>
                <div className='w-min  animate__bounce animate__animated animate__pulse animate__infinite  sf'>
                    <p className='p-10 df' >
                        <FaCss3Alt className='iconcss' size={60} />

                    </p>
                    <p className='mt-5 text text-purple-600 font-semibold text-2xl'>
                        CSS
                    </p>
                </div>
                <div className='w-min  animate__bounce animate__animated animate__pulse animate__infinite  sf'>
                    <p className='p-10 df' >
                        <FaHtml5 className='iconhtml' size={60} />

                    </p>
                    <p className='mt-5 text text-purple-600 font-semibold text-2xl'>
                        HTML5
                    </p>
                </div>
                <div className='w-min  animate__bounce animate__animated animate__pulse animate__infinite  sf'>
                    <p className='p-10 df' >
                        <FaNodeJs className='iconnode' size={60} />

                    </p>
                    <p className='mt-5 text text-purple-600 font-semibold text-2xl'>
                        Node.js
                    </p>
                </div>
                <div className='w-min  animate__bounce animate__animated animate__pulse animate__infinite  sf'>
                    <p className='p-10 df' >
                        <SiMongodb className='icondb' size={60} />

                    </p>
                    <p className='mt-5 text text-purple-600 font-semibold text-2xl'>
                        MongoDb
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;