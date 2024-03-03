import React from "react";
// import navigation data
import { navigation } from "./data";
// import link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="space-x-8 flex capitalize text-[15px]">
        {navigation.map(({ index, name, href }) => (
          <li
            className="text-white hover:text-accent cursor-pointer"
            key={index}
          >
            <Link
              to={href}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" transition-all duration-300"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
