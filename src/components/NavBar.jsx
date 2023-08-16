import React,{useState} from 'react'
import "./style.css"
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
const NavBar = () => {
 const [nav,setNav]=useState(false);
  const links=[
    {
      id: 1,
      link:'home'
    },
    {
      id: 2,
      link:'About'
    },
    {
      id: 3,
      link:'portfolio'
    },
    {
      id: 4,
      link:'Skills'
    },
    {
      id: 5,
      link:'contact'
    }
  ]
  return (
    <div className="flex flex-row justify-between items-center px-4 bg-black w-full h-20 fixed text-white ">
        <div>
            <h1 className=" cursor-pointer home  text-5xl font-signature ml-2">Faysal</h1>
        </div>
        <ul className="flex hidden-on-small "> 
        {links.map(({id,link})=>(
          <li key={id} className="home cursor-pointer capitalize font-medium text-gray-500 hover:text-gray-700 display:inline-block px-4"> 
          <Link to={link} spy={true} smooth duration={500}>{link}</Link>
          </li>
          ))}

          
            
      
        </ul>
        <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

            {nav && (
              <ul className="bar flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  text-gray-300">
          
              {links.map(({id,link})=>(
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl"> 
              <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
              ))}
    
            </ul>
            )}
        
        
     
    </div>
  )
}

export default NavBar
