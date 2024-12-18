import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-300 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Felise Marcaida
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-black">
            Certificates
          </a>
          <a href="#skills" className="mr-5 hover:text-black">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-black">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0"
        >
          View Contact 
          <ArrowRightIcon className="w-2 h-2 ml-3" />
        </a>
      </div>
    </header>
  );
}