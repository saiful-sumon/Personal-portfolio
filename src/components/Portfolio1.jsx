import React, { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { projectsData } from "./data";

const Portfolio = () => {
  // code for portfolio pagination
  const [showPerPage, setShowPerPage] = useState(3);
  const [currentPage, setcurrentPage] = useState(1);

  const totalPage = Math.ceil(projectsData.length / showPerPage);
  const pages = [...Array(totalPage + 1).keys()].slice(1);

  const lastIndex = currentPage * showPerPage;
  const firstIndex = lastIndex - showPerPage;

  const firstPage = projectsData.slice(firstIndex, lastIndex);

  const previousHandler = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage !== totalPage) {
      setcurrentPage(currentPage + 1);
    }
  };

  return (
    <section name="portfolio" className="section bg-primary h-[100vh] border-b-[1px] border-gray-900">
      <div className="container max-w-screen-lg px-4  mx-auto flex flex-col justify-center w-full h-full scroll lg:px-[1px] ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-2 border-gray-800">
            Portfolio
          </p>
          <p className="py-5">Check out some of my work right here</p>
        </div>

        {/* Display portfolio item  */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:px-0">
          {firstPage.map(({ id, image, link }) => (
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

        {/* Start pagination button  */}

        <div className=" flex justify-center items-center pt-10">
          <button
            onClick={previousHandler}
            className="p-btn btn-sm cursor-pointer"
          >
            <GrLinkPrevious className=" w-6 h-6" />
          </button>
          <p>
            {pages.map((page) => (
              <span
                onClick={() => setcurrentPage(page)}
                key={page}
                className={`${
                  currentPage === page ? "active" : " text-white"
                } cursor-pointer text-[24px]`}
              >
                {`${page} `}
              </span>
            ))}
          </p>

          <button onClick={nextHandler} className="p-btn btn-sm cursor-pointer">
            <GrLinkNext className=" w-6 h-6" />
          </button>
        </div>

        {/* End pagination button  */}
      </div>
    </section>
  );
};

export default Portfolio;
