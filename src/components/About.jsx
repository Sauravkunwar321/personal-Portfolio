import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 mb-10 ">
          I'm Saurav Kunwar, a passionate tech enthusiast exploring the world of
          frontend and web development. I love building interactive and
          user-friendly web experiences, diving into modern frameworks, and
          constantly honing my skills.
        </p>

        <br />

        <p className="text-xl mb-10">
          Right now, I’m exploring the latest frontend technologies, writing
          clean and efficient code, and learning how to bring creative ideas to
          life on the web. When I'm not coding, I enjoy reading tech blogs and
          even trying to learn Japanese.</p>

          <br />

          <p className="text-xl">
            Lately, I’ve been trying to involve myself more in books, listening
            to music, and doing art/painting.
          </p>
        
      </div>
    </div>
  );
};

export default About;
