import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

  const portfolio =[
    {
      id:1,
      src:arrayDestruct
    },
    {
      id:2,
      src:installNode
    },
    {
      id:3,
      src:navbar
    },
    {
      id:4,
      src:reactParallax
    },
    {
      id:5,
      src:reactSmooth
    },
    {
      id:6,
      src:reactWeather
    }
  ]
  return (
    <div name='portfolio' className="text-white portfolio pt-20 pl-20 w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="md:text-4xl font-bold inline  border-b-4 border-gray-500">Portfolio</p>
          <p><br />Check out some of my work right here</p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            portfolio.map(({id,src})=>(


              
              <div key={id} className="shadow-md shadow-gray-300 rounded-2xl">
                <img src={src} alt="" className="rounded-2xl Pimg" />
                <div className="flex  items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 Pbtn">Demo</button>
                  <button className="w-1/2 px-6 py-3 m-4 Pbtn">Code</button>
                </div>
              </div>
            

            ))
          }

</div>

        
        
      </div>



    </div>
  )
}

export default Portfolio
