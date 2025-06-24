import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 flex items-center justify-center gap-10 lg:flex-row flex-col">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex items-center justify-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex items-center flex-col gap-6 p-3 py-6 md:p-5 lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.company}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="flex flex-col gap-3 lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-start text-lg text-slate-300">
                    {card.company}
                  </p>
                  <p className="text-start text-base text-slate-300">
                    [{card.duration}]
                  </p>
                </div>
                <div className="text-start flex flex-col gap-3 text-white-100">
                  {card.desc.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
