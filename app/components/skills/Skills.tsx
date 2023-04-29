"use client";
// react imports
import { useState } from "react";

// other imports
import { skillsDataInterface as typeInterface } from "../../data/resume-data";
import Iskill from "./Iskill";

// creating the skills titles for buttons
const skillsTitles = [
  {
    id: "soft",
    title: "Soft Skills",
  },
  {
    id: "hard",
    title: "Hard Skills",
  },
];

// skills FC component
const Skills = ({ data }: { data: typeInterface }) => {
  // useState to manage the functionality of buttons and skills map function
  const [activeSkill, setActiveSkill] = useState("soft");

  // handler that will change the value of activeSkill based on button value
  // we are using the skillID for this purpose
  const skillChangeHandler = (skillId: string) => {
    setActiveSkill(skillId);
  };

  // skills FC component return
  return (
    <>
      <section className="mt-7">
        <div className="flex">
          {/* functionality of buttons */}
          {skillsTitles.map((item) => {
            return (
              <button
                key={item.id}
                className={`flex-1 ${
                  activeSkill === item.id ? "bg-yellow" : "bg-grey"
                } customButton`}
                onClick={() => {
                  skillChangeHandler(item.id);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        {/* div that will display the skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-5">
          {/* showing the skills based on the activeSkill value
         functionality of skills section */}
          {activeSkill === "soft"
            ? data.soft?.map((item, i) => {
                return (
                  <div key={i}>
                    <Iskill data={item} />
                  </div>
                );
              })
            : data.hard?.map((item, i) => {
                return (
                  <div key={i}>
                    <Iskill data={item} />
                  </div>
                );
              })}
        </div>
      </section>
    </>
  );
};

export default Skills;
