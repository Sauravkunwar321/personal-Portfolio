import React from "react";
import Movie from "../assets/portfolio/Movie.png";
import Swadilo from "../assets/portfolio/Swadilo.png";
import Chat from "../assets/portfolio/Chat.png";
import Bubble from "../assets/portfolio/Bubblegame.png";
import Cuberto from "../assets/portfolio/Cuberto.png";
import Leetmetrics from "../assets/portfolio/Leetmetrics.png";
import Netflixbase from "../assets/portfolio/Netflixbase.png";
import atlas from "../assets/portfolio/atlas.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Swadilo,
      title: "Swadilo",
      link: `https://github.com/Sauravkunwar321/Swadilo_food`,
      demo:`https://swadilo-three.vercel.app/`,
    },

    {
      id: 2,
      src: Movie,
      title: "Movieflix",
      link: `https://github.com/Sauravkunwar321/React-Movie-App`,
    },
    {
      id: 3,
      src: atlas,
      title: "World-ATLAS",
      link: `https://github.com/Sauravkunwar321/World_ATLAS`,
      demo: `https://lucky-semolina-ab7c22.netlify.app/`,
    },
    {
      id: 4,
      src: Chat,
      title: "Gemini-Chat",
      link: `https://github.com/Sauravkunwar321/Gemini-Chatbot`,
      demo: `https://gemini-chatbot-eight-drab.vercel.app/`,
    },
    {
      id: 5,
      title: "Notes-MCQ-Generator",
      src: `https://www.sanatankafle.com.np/images/Ai.gif`,
      link: `https://github.com/Sauravkunwar321/Notes-MCQ-Generator`,
    },
    {
      id: 6,
      title: "Used-Mobile-Price-Predictor",
      src: `https://www.sanatankafle.com.np/images/mior.gif`,
      link: `https://github.com/Sauravkunwar321/Used_mobile_price_predictor`,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, demo, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg hover:scale-105  duration-200"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex flex-col justify-center items-center">
                <div className="py-1 px-1 ">{title}</div>
                <div className="flex items-center justify-center">
                  <button className="w-0.5 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo} target="_blank">
                      {" "}
                      Demo
                    </a>
                  </button>
                  <button className="w-0.5 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={link} target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
