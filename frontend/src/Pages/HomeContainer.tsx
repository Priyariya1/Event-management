import React from 'react'
import HeroBg from "../assets/2.avif";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <section
      className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 "
      id="home"
    >
      <div className="flex flex-col items-start justify-center flex-1 gap-4 py-2">

        <p className="text-[1.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          The India's best  {''}
          <span className="text-rose-500 text-[2rem] lg:text-[4rem]">
            Event Mangement Agency {''}
          </span>
          for Corporate
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          A-Z event planning. We shall work on your event from beginning to end. You may relax and leave all the logistics to us.</p>
          <Link to={"/price"} className="flex items-center gap-2">    
        <button
          type="button"
          className="w-full px-4 py-2 transition-all duration-100 ease-in-out text-bold rounded-lg bg-gradient-to-br from-gray-500 to-blue-600 md:w-auto hover:shadow-lg"
        >
          See here
        </button></Link>
      </div>
      <div className="relative flex items-center flex-1 py-2">
        <img
          src={HeroBg}
          className="object-contain w-full max-w-md ml-auto h-420 lg:w-auto lg:h-650"
          alt="hero-bg"
        />
      </div>
    
    </section>
  )
}

export default Guide