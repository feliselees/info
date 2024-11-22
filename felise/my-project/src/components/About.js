import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
       
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Felise.
            <br className="hidden lg:inline-block" />BS Information Technology
           
          </h1>
          <p className="mb-8 leading-relaxed">
          I am an enthusiastic IT professional with a passion for leveraging technology to solve real-world problems. With a focus on staying updated with emerging technologies, I am committed to continuous learning and growth.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-200 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-blue-200 border-0 py-2 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Certificates
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://scontent.fmnl7-2.fna.fbcdn.net/v/t39.30808-6/467340832_1595201271424469_6116962978084963421_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFlsfetKGrl48edycfIqwSiVdiP78h0wZRV2I_vyHTBlCCAJrdqqFkgY2UmAEjqASf_8OzloSIgKU0VdVbHbaQI&_nc_ohc=pVEppxOFLpQQ7kNvgFgWU7i&_nc_zt=23&_nc_ht=scontent.fmnl7-2.fna&_nc_gid=AUXE-We7XPRyDCXIuiMVd4H&oh=00_AYCdBenNolI_GudQckXID6NgIFsVq2PbQ825XSTjFndC5g&oe=673E14D2  "
          />
        </div>
      </div>
    </section>
  );
}