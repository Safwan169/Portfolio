import React from 'react';

const Portfolio = () => {
    return (
        <div id='portfolio'  className='h-svh'>
           
           <section id="projects" class="py-12 bg-slate-900 text-white">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold mb-8 text-center">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div class="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="path/to/product-hunt-image.jpg" alt="Product Hunt" class="rounded-t-lg mb-4"/>
        <h3 class="text-2xl font-semibold mb-4">Product Hunt</h3>
        <p class="mb-4">A platform to discover new products. Built with React and Tailwind CSS, featuring a sleek, user-friendly interface and real-time search functionality.</p>
        <div class="flex justify-between">
          <a href=" https://ass-12-834ed.web.app/" target="_blank" class="text-blue-500 hover:underline">Live Demo</a>
          <a href="https://github.com/Safwan169/Product-Hunt-Client-side" target="_blank" class="text-blue-500 hover:underline">GitHub</a>
        </div>
      </div>

      <div class="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="path/to/alternative-product-image.jpg" alt="Alternative Product" class="rounded-t-lg mb-4"/>
        <h3 class="text-2xl font-semibold mb-4">Alternative Product</h3>
        <p class="mb-4">A comparison tool for finding alternative products. Developed using React and Tailwind CSS, it includes detailed comparison charts and user reviews.</p>
        <div class="flex justify-between">
          <a href="https://product-info-bd6b7.web.app" target="_blank" class="text-blue-500 hover:underline">Live Demo</a>
          <a href="https://github.com/Safwan169/Alternative-Product-Client-Side--1-" target="_blank" class="text-blue-500 hover:underline">GitHub</a>
        </div>
      </div>

      <div class="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src="path/to/tourist-management-image.jpg" alt="Tourist Management" class="rounded-t-lg mb-4"/>
        <h3 class="text-2xl font-semibold mb-4">Tourist Management</h3>
        <p class="mb-4">A comprehensive tourist management system. Features booking management, itinerary planning, and real-time updates, all built with React and Tailwind CSS.</p>
        <div class="flex justify-between">
          <a href="https://tourist-1f759.web.app/" target="_blank" class="text-blue-500 hover:underline">Live Demo</a>
          <a href="https://github.com/Safwan169/Tourism-Management-Client-Side-ORG" target="_blank" class="text-blue-500 hover:underline">GitHub</a>
        </div>
      </div>


    </div>
  </div>
</section>



            
          
        </div>
    );
};

export default Portfolio;