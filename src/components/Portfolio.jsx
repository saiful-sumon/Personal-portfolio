import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <div id='portfolio' className='section bg-primary h-[1400px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title'>My latest work</h2>
                <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, provident.</p>

                <Projects/>
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;