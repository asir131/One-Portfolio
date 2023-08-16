import React from 'react';
import asir from '../assets/asir.jpg';
import {MdArrowCircleRight} from 'react-icons/md';
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="  h-screen    bar text-white">
      <div className="  grid grid-flow-col      px-20   ">
        <div className="mt-20  py-16   ml-6 ">
          <h3 className="text-6xl sm:text-7xl font-bold">
            I'am a Front end Developer
          </h3>
          
           <div>
            <p className="px-20 pl-0 pt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt corrupti porro voluptatem nemo libero repellat incidunt consectetur non obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure hic sint quaerat quasi at doloribus adipisci dignissimos eveniet repudiandae, tenetur mollitia impedit corrupti cupiditate, vel dolorem fuga excepturi. Repellat, veritatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed rerum debitis voluptatibus quaerat iure tenetur deleniti sapiente reprehenderit ipsa?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facilis eum itaque, numquam quam dolor cupiditate atque culpa voluptatem saepe doloremque eos ad tempore. Animi perspiciatis iste et! Nam rem laborum alias esse eligendi id minus pariatur adipisci doloribus dignissimos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, illum? Sequi placeat hic unde officiis? Totam similique quis quaerat eius.
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
        <div className="mt-20 py-10 img ">
          <img src={asir} alt="" className="shadow-lg shadow-yellow-600 rounded-2xl mx-auto w-2/3  "/>
        </div>
       
      </div>
      
    </div>
  )
}

export default Home
