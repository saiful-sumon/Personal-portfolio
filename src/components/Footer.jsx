import React from "react";
import { social } from "./data";

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-b from-black to-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between ">
          {/* logo */}
          <div>
            <h2 className=" text-3xl font-signature ml-10 mb-0 ">Saiful</h2>
            {/* <h2 className=" text-2xl font-signature ml-16 -mt-3 text-amber-400 ">Islam</h2> */}
          </div>
          {/* text  */}
          <p>2024 &copy; Saiful Islam. All right reserved</p>
          {/* social  */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map(({ index, icon, href }) => (
              <a className=" text-accent text-[18px]" href={href} target="_blank" key={index}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
