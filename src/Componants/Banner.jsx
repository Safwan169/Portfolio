import React from 'react';
import { DiGithub, DiGithubBadge } from 'react-icons/di';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';
import { Typewriter } from 'react-simple-typewriter';
import 'animate.css';


const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row md:flex-row '>
            <div className='  text-white space-y-5 lg:w-full md:w-1/2
             p-4 '>
                <p className='font-semibold  animate__animated animate-slower 2s animate__slideInLeft lg:text-2xl md:text-2xl text-xl'>Hi, Myself</p>
                <h2>
                    <p className='md:text-4xl   animate__animated animate__fadeInLeftBig lg:text-4xl text-2xl font-bold' >Safwan Hossain Mridul</p >

                </h2>
                <p className='font-semibold md:text-2xl  animate__animated animate__fadeInLeftBig text-xl lg:text-2xl'>And I'm a    <span className='font-bold shadow-2xl shadow-cyan-500 text-cyan-500'>


                    <Typewriter
                        words={['Frontend Developer']}
                        loop={50}
                        cursor
                        cursorStyle='|'
                        typeSpeed={200}
                        deleteSpeed={200}
                        delaySpeed={2000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />


                </span>


                </p>

                <p className='text-xl  animate__animated animate__slideInLeft  animate-slower 10s '>I am a passionate web developer who loves to learn and enjoys coding. I thrive on solving problems and creating beautiful, functional web applications. My expertise lies in developing seamless user experiences with modern technologies like React and Tailwind CSS. Let's build something amazing together!</p>
                <div className='flex    text-cyan-500'>

                    <a href="">
                        <TiSocialFacebookCircular className='hover:scale-[1.1] shadow-2xl shadow-cyan-500 ' size={40} />
                    </a>
                    <a href="https://github.com/Safwan169">
                        <DiGithubBadge className='hover:scale-[1.1] shadow-2xl shadow-cyan-500' size={40} />

                    </a>
                    <a href="https://www.linkedin.com/in/safwan-hossain-mridul-873802307/">
                        <TiSocialLinkedinCircular className='hover:scale-[1.1] shadow-2xl shadow-cyan-500' size={40} />

                    </a>
                    <a href="">
                        <TiSocialTwitterCircular className='hover:scale-[1.1] shadow-2xl shadow-cyan-500' size={40} />
                    </a>

                </div>
                <button  className='shadow-cyan-600 shadow-2xl bg-cyan-500 rounded-full mt-5 hover:scale-[1.01] text-black p-3 px-6  font-bold'><a href='https://drive.google.com/file/d/1_a2Wlcf6WFn6Dy6GMmmEvkmAonHkriXR/view?usp=sharing'>Download CV</a></button>
            </div>
            <div className=' animate__bounceInDown animate__animated flex h-full md:w-1/2 w-full px-5 lg:w-1/2 mt-20 justify-center    items-center  '>
                <p className='animate__animated animate__pulse animate__infinite  shadow-[1px_1px_60px_-15px_cyan] 	infinite animate__slow	1s bg-gradient-to-r  from-cyan-500 to-blue-500 rounded-[50%] w-[300px] h-[300px]'>
                <img className=' h-full  ' src="https://i.ibb.co/QNBpMGt/1720025724159-removebg-preview-fotor-20240703233334.png" alt="" />

                </p>
            </div>

        </div>


    );
};

export default Banner;