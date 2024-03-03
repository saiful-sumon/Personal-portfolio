import React from "react";
import { Link } from "react-scroll";
import aboutImg from "../assets/img/ss.jpg";

const About = () => {
  return (
    <div id="about" className="section bg-secondary lg:h-[100vh]">
      <div className="container flex mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-32">
          <img
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="object-cover h-full w-[350px] md:mx-auto lg:mx-0 rounded-3xl"
            src={aboutImg}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[3rem] before:hidden before:lg:block ">
                Saiful Islam
              </h2>
              <p className="mb-3 text-accent">
                Freelance Front-End Web Developer
              </p>
              <hr className="mb-4 opacity-5" />
              <p className="mb-8 text-[16px] leading-[1.3]">
                Welcome to my profile! I'm a Frontend Web Developer and
                WordPress Expert. As a part of my work, I will bring the website
                to life by using HTML CSS, JavaScript, Bootstrap, Tailwind CSS,
                and React JS. I specialize in creating custom, user-friendly
                designs that not only look great but also function seamlessly.
                I'm passionate about creating designs that not only meet but
                exceed your expectations. I take pride in my ability to
                translate your vision into a website that is not only visually
                stunning but also easy to use and navigate.
              </p>
            </div>
            <Link to="contact" smooth={true} spy={true} duration={500} className=" transition-all duration-300 ">
              <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all rounded-lg">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
