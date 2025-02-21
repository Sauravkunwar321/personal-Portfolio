import React from "react";
import Movie from "../assets/portfolio/Movie.png";
import Chat from "../assets/portfolio/Chat.png";
import Bubble from "../assets/portfolio/Bubblegame.png";
import Cuberto from "../assets/portfolio/Cuberto.png";
import Leetmetrics from "../assets/portfolio/Leetmetrics.png";
import Netflixbase from "../assets/portfolio/Netflixbase.png";

const Portfolio = () => {

const portfolios = [
    {
        id:1,
        src:Movie,
        link: `https://github.com/Sauravkunwar321/React-Movie-App`,
    },
    {
        id:2,
        src:Chat,
        link:`https://github.com/Sauravkunwar321/Gemini-Chatbot`,
        demo:`https://gemini-chatbot-eight-drab.vercel.app/`
    },
    {
        id:3,
        src:Bubble,
        link:`https://github.com/Sauravkunwar321/Bubble-Game`,
        demo:`https://bubbliegame.netlify.app/`
    },
    {
        id:4,
        src:Cuberto,
        link:`https://github.com/Sauravkunwar321/LeetMetrics`,
        demo:`https://modern-website-six-delta.vercel.app/`
        
    },
    {
        id:5,
        
        src:Leetmetrics,
        link:`https://github.com/Sauravkunwar321/LeetMetrics`,
        demo:`https://fluffy-alfajores-e17e69.netlify.app/`
    },
    {
        id:6,
        src:Netflixbase,
        link:`https://github.com/Sauravkunwar321/Netflix-basic-clone`,
        demo:`https://aesthetic-kitsune-ffb562.netlify.app/`
    },
]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
        portfolios.map(({id, src, link, demo}) => (
            
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-105  duration-200">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <button className="w-0.5 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={demo} target="_blank"> Demo</a>
                </button>
                <button className="w-0.5 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={link} target="_blank">Code</a>
                  
                </button>
              </div>
            </div>
          

        ))
        }
        </div>

       
      </div>
    </div>
  );
};

export default Portfolio;
