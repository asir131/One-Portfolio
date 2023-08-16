import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tail from '../assets/tailwind.png'
import next from '../assets/nextjs.png'
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'
const Experience = () => {
    const experience =[
        {
          id:1,
          src:css,
          title:'CSS',
          style:'shadow-blue-400'

        },
        {
          id:2,
          src:html,
          title:'HTML',
          style:'shadow-orange-400'
        },
        {
          id:3,
          src:node,
          title:'NODE',
          style:'shadow-green-400'
        },
        {
          id:4,
          src:react,
          title:'REACT',
          style:'shadow-sky-400'
        },
        {
          id:5,
          src:tail,
          title:'TAILwind',
          style:'shadow-sky-400'
        },
        {
          id:6,
          src:next,
          title:'NEXTJS',
          style:'shadow-gray-400'
        },
        {
            id:7,
            src:JavaScript,
            title:'JavaScript',
            style:'shadow-yellow-400'
          },
          {
            id:8,
            src:GitHub,
            title:'GitHub',
            style:'shadow-gray-400'
          },
          
      ]
      return (
        <div name='portfolio' className="text-white pb-10 experience pt-20 pl-20 w-full md:h-screen">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline  border-b-4 border-gray-500">Experience</p>
              <p><br />Check out some of my work right here</p>
            </div>
            <div  className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
              {
                experience.map(({id,src,title,style})=>(
    
    
                  
                  <div key={id} className={`shadow-lg rounded-2xl ${style}`} >
                    <img src={src} alt="" className=" Pimg" />
                    <div className="flex  items-center justify-center">
                      <button className="w-1/2 px-6 py-3 m-4 Pbtn">{title}</button>
                      
                    </div>
                  </div>
                
    
                ))
              }
    
    </div>
    
            
            
          </div>
    
    
    
        </div>
      )
}

export default Experience
