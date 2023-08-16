import React from 'react';
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed  ">
        <ul>
            <li className="flex ml-[-100px] hover:ml-[-10px] text-white hover:rounded-md duration-300 justify-between items-center w-40 h-14 px-4 bg-gray-500">
                <a href="https://www.linkedin.com/in/asir-faysal-858883261/" className="flex justify-between items-center w-full">
                    <>
                    LinkedIn <FaLinkedin size={30}/>
                    </>
                </a>
            </li>
            <li className="flex ml-[-100px] hover:ml-[-10px] text-white hover:rounded-md duration-300 justify-between items-center w-40 h-14 px-4 bg-gray-500">
                <a href="https://github.com/" className="flex justify-between items-center w-full">
                    <>
                    GitHub <FaGithub size={30}/>
                    </>
                </a>
            </li>
            <li className="flex ml-[-100px] hover:ml-[-10px] text-white hover:rounded-md duration-300 justify-between items-center w-40 h-14 px-4 bg-gray-500">
                <a href="https://mail.google.com/mail/u/0/#inbox" className="flex justify-between items-center w-full">
                    <>
                    Mail <HiOutlineMail size={30}/>
                    </>
                </a>
            </li>
            <li className="flex ml-[-100px] hover:ml-[-10px] text-white hover:rounded-md duration-300 justify-between items-center w-40 h-14 px-4 bg-gray-500">
                <a href="/" className="flex justify-between items-center w-full">
                    <>
                    Contact <BsFillPersonLinesFill size={30}/>
                    </>
                </a>
            </li>
        </ul>
      
      
    </div>
  )
}

export default SocialLinks
