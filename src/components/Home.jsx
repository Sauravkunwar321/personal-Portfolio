import React from 'react';
import heroImage from "../assets/heroImage.png";
import heroImage2 from "../assets/heroImage2.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home" className=' h-[60em] w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row'>
            <div className='flex flex-col justify-center h-4 mb-8 mt-25'>
                <h2 className='text-4xl mt-10 sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I am enthusiast to learn more about web development. Currently, I love to work on web application using technologies like Javascript, React, Tailwind, Bootstrap.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <RiArrowRightSLine size={20} className='ml-1'/>
                        </span>


                    </Link>
                </div>
            </div>
            <div>
                <img className="h-96 w-96 mt-50 rounded-2xl mx-auto md:w-110 md:h-80 "  src={heroImage2} alt="my profile" />
            </div>
        </div>
      

    </div>
  )
}

export default Home
