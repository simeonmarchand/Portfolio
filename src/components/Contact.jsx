import React from "react";

function Contact(){
  return(
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form 
          action="https://getform.io/f/0a810c52-5ac8-41f0-b8d5-33b6f48fd4d7"
          method="POST"
          className="flex flex-col w-full md:7/12"
        >
          <input 
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input 
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="10"
            className="pd-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button 
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-stone-500 to-orange-500 drop-shadow-md hover:stroke-white"
            >
              Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;