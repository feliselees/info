import { BadgeCheckIcon, ChipIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <PaperAirplaneIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills 
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          My diverse skills make me an exceptional asset to any IT team. I am an IT professional equipped to thrive in dynamic and fast-paced environments. I efficiently manage tasks to meet deadlines, quickly adapt to new technologies and workflows, and consistently deliver innovative solutions.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-blue-300 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-gray-100">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}