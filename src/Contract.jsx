
import React, { useState } from 'react';
import axios from 'axios';
import { FaPhoneVolume } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

const Contract = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post('http://localhost:5000/send-email', formData)
      .then(response => {
        setStatusMessage('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      })
      .catch(error => {
        setStatusMessage('Error sending email.');
        // console.error('There was an error!', error);
        setIsLoading(false);
      });
  };

  return (
    <section id='contract' className= "flex flex-col lg:flex-row md:flex-row justify-between lg:gap-10 md:gap-10  items-center  py-12">
      <div className="rounded-2xl  bg-cyan-950 bg-opacity-20  lg:p-20 md:p-20 p-5 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">Contact <span className='text-cyan-400'> Me</span></h2>
        <form onSubmit={handleSubmit} className=" shadow overflow-hidden sm:rounded-lg p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm bg-slate-600 text-white placeholder-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-slate-600 text-white placeholder-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium  text-gray-500">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block bg-slate-600 text-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className=" bg-gradient-to-r from-cyan-400 to-blue-600  rounded-3xl inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {statusMessage && (
            <div className={`mt-4 text-center text-sm ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>
      <div className='space-y-5 mx-5 lg:mx-0 md:mx-0'>
        <p className='flex items-center gap-5 text-white'>
            <p className='bg-purple-600  lg:w-12 lg:h-12  rounded-full'><FiPhoneCall className=' p-3'  size={45} />
            </p>
            <p>
                <p className=' lg:text-2xl text-xl font-semibold'>Phone</p>
                <p className=' font-semibold hover:text-purple-500'>+8801797051762</p>
            </p>
        </p>
        <p className='flex items-center gap-5 text-white'>
            <p className='bg-purple-600  lg:w-12 lg:h-12  rounded-full'><AiOutlineMail  className=' p-3'  size={45} />
            </p>
            <p>
                <p className='lg:text-2xl md:text-2xl text-xl font-semibold'>Email</p>
                <p className='  text-[15px]  font-semibold hover:text-purple-500'>safwanhossainmridul@gmail.com</p>
            </p>
        </p>
        <p className='flex items-center gap-5 text-white'>
            <p className='bg-purple-600  lg:w-12 lg:h-12  rounded-full'><IoLocationOutline  className=' p-3'  size={45} />
            </p>
            <p>
                <p className='lg:text-2xl md:text-2xl text-xl font-semibold'>Address</p>
                <p className=' text-xs lg:text-[15px] md:text-[15px] font-semibold hover:text-purple-500'>
                    Haydarabad 39 No Word,Tongi,Gazipur
                </p>
            </p>
        </p>
      </div>
    </section>
  );
};



export default Contract;