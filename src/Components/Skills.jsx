import Section from "./Section";
import { text, icons } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext } from "react";
import Heading from "./Heading";

import unityImg from "../assets/unity-img.svg";
import cSharpImg from "../assets/c-sharp-img.svg";
import webImg from "../assets/web-development-img.svg";

import Csharp from "../assets/SkillsIcons/Csharp.svg";
import css from "../assets/SkillsIcons/css.svg";
import discord from "../assets/SkillsIcons/discord.svg";
import html from "../assets/SkillsIcons/html5.svg";
import pinterest from "../assets/SkillsIcons/pinterest.svg";
import react from "../assets/SkillsIcons/react.svg";
import tailwind from "../assets/SkillsIcons/tailwind.svg";
import unity from "../assets/SkillsIcons/unity.svg";
import vs from "../assets/SkillsIcons/visualstudio.svg";
import vscode from "../assets/SkillsIcons/vscode.svg";
import youtube from "../assets/SkillsIcons/youtube.svg";

const Skills = () => {
  const { language } = useContext(LanguageContext);

  const imageMap = {
    unityImg: unityImg,
    cSharpImg: cSharpImg,
    webImg: webImg,
  };

  const iconsMap = {
    Csharp: Csharp,
    css: css,
    discord: discord,
    html: html,
    pinterest: pinterest,
    react: react,
    tailwind: tailwind,
    unity: unity,
    vs: vs,
    vscode: vscode,
    youtube: youtube,
  };

  return (
    <>
      <Section crosses classNameBorder="mt-10" id="Skills">
        <section>
          <Heading className="">
            {text[language].Header.find((item) => item.id === "1").title}
          </Heading>
          <div className="w-full flex-col lg:flex-row flex items-center justify-around mt-10">
            {text[language].Skills.map((item) => (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${imageMap[item.src]})` }}
                className={`w-[90%] mb-10 lg:mb-0 lg:w-[30%] lg:h-[30rem] flex flex-col items-center border border-n-5 rounded-2xl p-3 transition-all hover:shadow-container bg-no-repeat bg-center bg-contain`}
              >
                <div className="w-full h-[8rem] md:h-[5rem] lg:h-[8rem] border-n-5 border-b-[.2rem] flex items-center">
                  <h1 className="h2 w-full text-center">{item.title}</h1>
                </div>
                <p className="body-1 my-10 mr-3 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className=" border-t-n-5 border-t-[0.2rem] lg:mt-10">
          <Heading className="sm:mt-5">
            {text[language].SkillsText.find((item) => item.id === "0").text}
          </Heading>
          <div className="flex w-full flex-wrap justify-around mt-10">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="w-[40%] sm:w-[30%] md:w-[21%] lg:w-[15%] p-3"
              >
                <img
                  src={iconsMap[icon.url]}
                  alt={icon.title}
                  className="transition-all grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </section>
      </Section>
    </>
  );
};

export default Skills;
