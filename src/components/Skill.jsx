import React from "react";
import { skills } from "../components/data";

const Skill = () => {
  return (
    <div
      id="skill"
      className="w-full h-[100vh] bg-gradient-to-b from-black to-gray-800"
    >
      <div className="container mx-auto">
        <div className=" max-w-screen-xl mx-auto pt-20 pb-12 flex flex-col justify-center text-center lg:text-start w-full h-screen lg:p-3">
          <div className="">
            <p className="text-4xl font-bold text-white border-b-[2px] border-slate-700 inline">
              My Skills
            </p>
            <p className="py-4 text-accent">
              I have worked using these technologies.
            </p>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 text-center py-8 px-12 lg:px-0">
            {skills.map(({ id, image, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ${style}`}
              >
                <img className="w-20 mx-auto" src={image} alt="" />
                <p className="mt-5">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
