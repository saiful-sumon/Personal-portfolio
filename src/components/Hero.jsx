import React from "react";
import { Link } from "react-scroll";
import image from "../assets/img/web1.png";

const Hero = () => {
  return (
    <div
      id="home"
      className=" lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h6 className="text-lg text-accent mb-3">Hey, I'm Saiful Islam</h6>
            <h2 className="text-4xl leading-10 md:text-4xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h2>
            <p className="pt-4 pb-4 md:pt-6 md:pb-8 max-w-[480px] text-sm text-center lg:text-left">
              I am passionate about building excellent web interfaces using the
              latest web technology.
            </p>

            <Link
              to="services"
              smooth={true}
              spy={true}
              duration={1000}
              className=" transition-all duration-300 "
            >
              <button className="btn btn-md rounded-lg bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                Work with me
              </button>
            </Link>
          </div>
          {/* right side  */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img
              className=" w-2/3 rounded-3xl overflow-hidden"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
