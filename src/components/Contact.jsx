import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import React, { useRef } from "react";
import { FromSchema } from "./FormSchema";
import { social } from "./data";

const Contact = () => {
  const form = useRef();
  const formInitialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: formInitialValues,
    validationSchema: FromSchema,
    onSubmit: () => {
      //email js
      emailjs
        .sendForm("service_y8dcc84", "template_f21ena5", form.current, {
          publicKey: "k8lgponqFe6P2asiw",
        })
        .then(
          () => {
            alert("SUCCESS!");
          },
          (error) => {
            alert("FAILED...", error.text);
          }
        );

      resetForm({ values: "" });
    },
  });

  return (
    <div
      id="contact"
      className="py-16 lg:h-[100vh] lg:section bg-gradient-to-b from-black to-gray-800"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row gap-y-32">
          {/* text  */}
          <div className=" flex flex-1">
            <div>
              <h4 className="text-sm uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[32px] lg:text-[70px] leading-none mb-8">
                Let's work <br /> together
              </h2>
              {/* social icon  */}
              <div className="flex space-x-6 ">
                {social.map(({ index, icon, href }) => (
                  <a
                    className=" text-accent text-[18px]"
                    href={href}
                    target="_blank"
                    key={index}
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* form  */}
          <form
            ref={form}
            className="border rounded-2xl flex flex-col gap-y-5 py-5 p-8 items-start lg:w-2/5"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 mt-2 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your Name"
            />

            <p
              style={{
                color: "#ac6b34",
                marginTop: "-20px",
                // marginBottom: "-25px",
                fontSize: "15px",
              }}
            >
              {errors.name}
            </p>

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Your Email"
            />

            <p
              style={{
                color: "#ac6b34",
                marginTop: "-20px",
                // marginBottom: "-10px",
                fontSize: "15px",
              }}
            >
              {errors.email}
            </p>

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />

            <p
              style={{
                color: "#ac6b34",
                marginTop: "-20px",
                // marginBottom: "-15px",
                fontSize: "15px",
              }}
            >
              {errors.phone}
            </p>

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              name="message"
              onChange={handleChange}
              value={values.message}
              placeholder="Your message"
            ></textarea>

            <p
              style={{
                color: "#ac6b34",
                marginTop: "-65px",
                marginBottom: "30px",
                fontSize: "15px",
              }}
            >
              {errors.message}
            </p>

            <button
              type="submit"
              className="btn btn-sm bg-accent hover:bg-accent-hover -mt-7 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
