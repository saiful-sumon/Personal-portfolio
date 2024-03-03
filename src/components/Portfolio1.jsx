import React from "react";
import { projectsData } from "./data";

const Portfolio = () => {
  return (
    <section name="portfolio" className="section bg-primary h-[140vh]">
      <div className="container max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-2 border-gray-800">
            Portfolio
          </p>
          <p className="py-5">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:px-0">
          {projectsData.map(({ id, image, link }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-110">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
