import React from "react";
// import social icon data
import { social } from "./data";

const Social = () => {
  return (
    <div>
      <ul className="flex space-x-6">
        {social.map(({ index, icon, href }) => (
          <li
            className="flex justify-center items-center text-accent"
            key={index}
          >
            <a className="text-base" href={href} target="_blank">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
