import React from 'react';

const About = () => {
    return (
        <div id='about' className='w-full  p-10 h-full  '>
            <div className='flex  mt-40 h-full gap-20 mx-auto   flex-col lg:flex-row md:flex-row'>
                <p className='border-4 h-[400px]  w-full border-blue-500  rounded-2xl '>
                    {/* <img className=' h-full  w-full  ' src="https://i.ibb.co/QNBpMGt/1720025724159-removebg-preview-fotor-20240703233334.png" alt="" /> */}
                </p>
                <div className=' flex items-center   justify-center  space-y-4'>
                    <div>
                        <div className='space-y-2'>
                            <p className='text-3xl font-bold text-white'>About <span className='text-blue-500'>Me</span></p>
                            <p className='text-xl font-semibold text-white'>Frontend Developer</p>
                        </div>
                        <div className='text-white'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga beatae corporis laudantium obcaecati sit nemo et consequuntur blanditiis itaque. Itaque iusto architecto repellendus ratione dolor esse in eveniet assumenda.
                                Officiis quod maxime deleniti esse debitis laboriosam voluptate, suscipit, distinctio natus molestiae fugiat id. Repellendus deserunt dolor fugiat veniam? Voluptatum laborum consequuntur temporibus. Dolorem nobis a doloribus? Atque, veritatis ipsum.</p>
                        </div>
                        <button className= 'mt-5 bg-blue-500 text-black rounded-3xl px-4 py-2  font-bold '>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;