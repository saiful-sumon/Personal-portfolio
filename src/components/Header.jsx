import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Social from "./Social";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo  */}

        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={800}
          className=" transition-all duration-300 "
        >
          <div className=" cursor-pointer">
            <h2 className=" text-2xl font-signature mb-0 ">Saiful</h2>
          </div>
        </Link>

        {/* nav  */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* social  */}
        <div className="hidden lg:block">
          <Social />
        </div>
        {/* nav mobile  */}
        <div className=" lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
