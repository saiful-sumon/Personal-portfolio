import React from "react";
import { services } from "./data";

const Services = () => {
  return (
    <div className="section bg-tertiary" id="services">
      <div className="container mx-auto">
        {/* section title  */}
        <div className="flex flex-col items-center text-center mt-8 lg:-mt-10">
          <h2 className=" section-title">What I Do For Clients</h2>
          <p className="mb-8 text-[15px] leading-[1.2]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,{" "}
            <br /> perferendis tempore voluptatibus vel aperiam quaerat.
          </p>
        </div>
        {/* section item view */}
        <div className="grid lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className=" bg-secondary p-6 rounded-2xl" key={index}>
                {/* icon  */}
                <div className=" text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[32px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p className=" text-[14px] leading-[1.2]">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
