import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import django from '../assets/django.png'
import react from '../assets/react.png'
import tail from '../assets/tailwind.png'
import ml from '../assets/ml.png'
import JavaScript from '../assets/javascript.png'
import cisco from '../assets/cisco.png'
const Skills = () => {
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
          src:django,
          title:'Django',
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
          src:ml,
          title:'Machine Learning',
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
            src:cisco,
            title:'Cisco',
            style:'shadow-blue-900'
          },
          
      ]
      return (
        <div name="Skills"  className="text-white  pb-10 experience pt-20 pl-20 w-full md:h-screen">
          <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline  border-b-4 border-gray-500">Skills</p>
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

export default Skills
