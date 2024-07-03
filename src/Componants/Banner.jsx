import React from 'react';
import { DiGithub, DiGithubBadge } from 'react-icons/di';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti';
import { VscGithub } from 'react-icons/vsc';
import { Typewriter } from 'react-simple-typewriter';
import 'animate.css';


const Banner = () => {
    return (
        <div className='flex '>
            <div className='  text-white space-y-5 lg:w-full md:w-1/2
             p-4 h-svh'>
                <p className='font-semibold  animate__animated animate-slower 2s animate__slideInLeft lg:text-2xl md:text-2xl text-xl'>Hi, Myself</p>
                <h2>
                    <p className='md:text-4xl   animate__animated animate__fadeInLeftBig lg:text-4xl text-2xl font-bold' >Safwan Hossain Mridul</p >

                </h2>
                <p className='font-semibold md:text-2xl  animate__animated animate__fadeInLeftBig text-xl lg:text-2xl'>And I'm a    <span className='font-bold text-blue-500'>


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

                <p className='text-xl  animate__animated animate__slideInLeft  animate-slower 10s '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium vitae nostrum exercitationem adipisci sunt veritatis rerum quas aperiam labore quo accusantium earum qui sint quibusdam voluptate, architecto consequatur est.
                    Quos laborum quam asperiores neque dolores animi quidem rerum quia maiores, sed optio harum nemo dolorum corporis, tempora magnam reiciendis ea error, voluptatem sequi minus provident recusandae. Quo, perferendis excepturi?
                </p>
                <div className='flex   text-blue-500'>

                    <a href="">
                        <TiSocialFacebookCircular className='hover:scale-[1.1]' size={40} />
                    </a>
                    <a href="">
                        <DiGithubBadge className='hover:scale-[1.1]' size={40} />

                    </a>
                    <a href="">
                        <TiSocialLinkedinCircular className='hover:scale-[1.1]' size={40} />

                    </a>
                    <a href="">
                        <TiSocialTwitterCircular className='hover:scale-[1.1]' size={40} />
                    </a>

                </div>
                <button className='bg-blue-500 rounded-full mt-5 hover:scale-[1.01] text-black p-3 px-6  font-bold'>Download CV</button>
            </div>
            <div className='flex h-full w-1/2 mt-20 justify-center    items-center  '>
                <p className='animate__animated animate__pulse animate__infinite	infinite animate__slow	1s bg-gradient-to-r  from-cyan-500 to-blue-500 rounded-[50%] w-[300px] h-[300px]'>
                {/* <img className=' h-full  ' src="https://i.ibb.co/QNBpMGt/1720025724159-removebg-preview-fotor-20240703233334.png" alt="" /> */}

                </p>
            </div>

        </div>


    );
};

export default Banner;