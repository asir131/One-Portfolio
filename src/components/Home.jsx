import React from 'react';
import asir from '../assets/asir.jpg';
import {MdArrowCircleRight} from 'react-icons/md';
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="  h-screen sm:flex   bar text-white">
      <div className="  grid md:grid-flow-col    px-20   ">
        <div className="mt-20  py-16   ml-6 ">
          <h3 className=" md:text-6xl text-2xl   font-bold">
            I'am a Front end Developer
          </h3>
          
           <div>
            <p className="px-20 pl-0 pt-10">
            Dedicated and highly driven student studying computer science engineering looking for an internship to put my technological know-how to use in a real-world professional situation. I'm excited to contribute to a creative and imaginative team while obtaining relevant experience thanks to my love for problem-solving and solid grounding in computer science fundamentals.
            </p>
           </div>
          <div>
            <Link to="portfolio"  smooth  className="cursor-pointer mt-10 group flex  w-fit items-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
              Portfolio 
              <span className="group-hover:rotate-90 duration-300">
              <MdArrowCircleRight size={30}/>
              </span>
            </Link>
          </div>
        </div>
        <div className="md:mt-20 md:py-10 img ">
          <img src={asir} alt="" className="shadow-lg shadow-yellow-600 rounded-2xl w-3/4 md:w-2/3  "/>
        </div>
       
      </div>
      
    </div>
  )
}

export default Home
