import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Mathematics (Honors)',
      institution: 'Government Titumir College',
      year: '2022 - Present',
      details: 'Relevant coursework: Calculus, Linear Algebra, Differential Equations, Probability and Statistics.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Nawab Habibullah Model School and College',
      year: '2021',
      details: 'Achieved excellent grades with a focus on Mathematics and Science.'
    }
  ]
  
    return (
      <section id='edu' className="pt-40 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center lg:text-left md:text-left flex items-center gap-5   mb-8"><FaGraduationCap className='text-cyan-300 hover:scale-105' size={70}/> Education</h2>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className=" border-b border-cyan-300 hover:shadow-cyan-300 hover:shadow-lg overflow-hidden sm:rounded-lg p-6">
                <h3 className="text-xl font-bold ">{edu.degree}</h3>
                <p className="">{edu.institution}, {edu.year}</p>
                <p className=" mt-2">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Education;