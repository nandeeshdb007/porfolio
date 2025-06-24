import { FaLocationArrow } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" pb-8 lg:pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words={`Hi! I'm Nandeesh D B, a Full Stack Developer.`}
            className="text-center text-3xl  md:text-5xl lg:text-7xl"
          />

          <TypeAnimation
            sequence={[
              `A highly skilled Full-Stack Developer with expertise in building scalable web applications using modern technologies like Next.js,
Express.js, and AWS. Proficient in developing B2B SaaS platforms, optimizing performance, and integrating AI-driven automation for
enhanced user experience. Seeking career advancement with an esteemed organization to leverage my extensive experience in full-
stack development and AI-driven automation to build scalable, high-performance web applications that drive business growth and
innovation.`,
            ]}
            wrapper="p"
            speed={99}
            className="text-xs mb-5 text-center text-white lg:text-base"
            repeat={1}
            cursor={false}
          />

          <div className="w-full grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-10">
            <Link
              className=""
              href={"https://github.com/nandeeshdb007"}
              target="_blank"
            >
              <MagicButton
                title="Github"
                icon={<FaGithub />}
                position="right"
              />
            </Link>
            <Link
              className=""
              href={"https://leetcode.com/u/nandeesh_007/"}
              target="_blank"
            >
              <MagicButton
                title="Leetcode"
                icon={<SiLeetcode />}
                position="right"
              />
            </Link>
            <Link
              className=""
              href={"https://www.linkedin.com/in/nandeeshdb/"}
              target="_blank"
            >
              <MagicButton
                title="Linkedin"
                icon={<FaLinkedin />}
                position="right"
              />
            </Link>
            <Link
              className=""
              href={"https://tinyurl.com/53uvyndk"}
              target="_blank"
            >
              <MagicButton
                title="Resume"
                icon={<LuFileSpreadsheet />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
