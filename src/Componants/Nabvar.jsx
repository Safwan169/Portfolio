import React, { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Portfolio from '../Portfolio.jsx';
import Banner from './Banner';
// import { NavLink } from 'react-router-dom';

// import Portfolio from './Portfolio.jsx';


const Nabvar = () => {
    const [toggleNav, setToggle] = useState(false)
    const [navBtn, setNavbtn] = useState(true)
    const handleNav = () => {
        setToggle(true)
        setNavbtn(false)

    }

    const handleCross = () => {
        setToggle(false)
        setNavbtn(true)

    }


    const navtext = <>

        {/* <li>
            {/* <NavLink  to={'/'} className={({isActive}) =>
                isActive ? '   rounded-xl  text-blue-500     hover:text-blue-500    my-2 lg:my-0 md:my-0 ' : "block no-underline my-2 lg:my-0 md:my-0   text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "} > */}
        {/* <a  href="#port">Home</a> */}
        {/* </NavLink> */}
        {/* </li> */}
        {/* <li>
            <a href='#port' className={({isActive}) =>
                isActive ? '   rounded-xl  text-blue-500     hover:text-blue-500    my-2 lg:my-0 md:my-0 ' : "block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "} >
                About</a>        </li>
        <li>
            <NavLink to={'/services'} className={({isActive}) =>
                isActive ? '   rounded-xl  text-blue-500     hover:text-blue-500    my-2 lg:my-0 md:my-0 ' : "block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "} >
                Services</NavLink>        </li>
        <li>
            <NavLink   to={'/portfolio'} className={({isActive}) =>
                isActive ? '   rounded-xl  text-blue-500     hover:text-blue-500    my-2 lg:my-0 md:my-0 ' : "block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "} >
                Portfolio</NavLink>        </li>
        <li>
           <a href="#port">
            
           <NavLink to={'/contract'} className={({isActive}) =>
                isActive ? '   rounded-xl  text-blue-500     hover:text-blue-500    my-2 lg:my-0 md:my-0 ' : "block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "} >
                Contract</NavLink>   
            </a>  
                   </li> */}



        <li>
            <a href="" className='block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Home
            </a>

        </li>
        <li>
            <a href="#about" className='block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                About
            </a>

        </li>
        <li>
            <a href="#portfolio" className='block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Portfolio
            </a>

        </li>
        <li>
            <a href="#contract" className='block no-underline my-2 lg:my-0 md:my-0  text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Contract</a>

        </li>
    </>
    return (
        <div className='bg-slate-800 w-full '>


            <nav class=" dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white ">Portfolio</span>
                    </a>
                    {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button> */}

                    <button>
                        {navBtn ? <FiAlignJustify onClick={handleNav} className='md:hidden lg:hidden block no-underline text-white' size={25} /> : ''}
                        {
                            toggleNav ? <div className=''>
                                <button>
                                </button>
                                <ul className='flex-col font-bold bg-blue-900 bg-opacity-35 w-[100px] absolute right-0 top-1'>
                                    <FiX onClick={handleCross} size={25} className=' relative left-[60%] text-white mt-2 mb-3' />

                                    {
                                        navtext
                                    }
                                </ul>
                            </div> : <div></div>
                        }
                    </button>


                    <div class="hidden w-full md:block no-underline md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                navtext
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            
            
           




        </div>
    );
};

export default Nabvar;