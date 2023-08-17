import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="portfolio w-full h-screen  p-4 text-white">
      <div className="px-20 flex flex-col p-4 justify-center mx-auto h-full md:w-2/4 ">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">Contact</p>
            <p className="pt-6">Submit the form billow to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/21d85bf3-11c4-49fb-9cd5-96165516892c" method="POST" className="flex flex-col w-full ">
                <input type="text" name="name" placeholder="Enter your name " className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <input type="text" name="email" placeholder="Enter your Email " className="my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <textarea name="message" id="" placeholder="Enter your message here" className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"  rows="10"></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
