import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/3d-illustration-team-management-png.webp";
import HomeContainer from './HomeContainer'

const Home = () => {
  return (
    <header className="fixed z-50 w-screen p-3 px-4 text-white bg-gradient-to-b from-blue-300 to-blue-900 shadow-xl md:p-6 md:px-16 ">
      {/* desktop & tablet */}
      <div className="items-center justify-between hidden w-full h-full md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="object-cover w-16" alt="logo" />
          <p className="text-xl font-bold text-white font-signature ml-2 ">Your organizer</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <Link to={"/"} className="flex items-center gap-2">
            <li className="text-lg text-white transition-all duration-400 ease-in-out cursor-pointer hover:text-black">
              Events
            </li>
           </Link> 
           
           <Link to={"/shedules"} className="flex items-center gap-2">
            <li className="text-lg text-white transition-all duration-100 ease-in-out cursor-pointer hover:text-headingColor">
              shedules
            </li>
           </Link>          
          </motion.ul>        
        </div>
      </div>
       <HomeContainer />
    </header>
      )
}

export default Home