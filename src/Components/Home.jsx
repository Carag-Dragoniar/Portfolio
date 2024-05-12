import Section from "./Section";
import { text } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext } from "react";

import codingManHome from "../assets/codingManHome.png";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section crosses first className="flex justify-between" id="Home">
      <img
        className="hidden lg:block lg:w-[20rem] xl:w-[27rem] 2xl:w-[32rem] aspect-square"
        src={codingManHome}
        alt="Coding man"
      />
      <div className=" w-full flex justify-center">
        <div className="lg:ml-[15%] flex flex-col items-center">
          <h1 className="font-semibold -ml-20 lg:-ml-52 font-title text-[30vw] leading-[28vw] md:text-[12.5rem] md:leading-[10.75rem] lg:text-[8.5rem] lg:leading-[7.5rem] xl:text-[10.5rem] xl:leading-[8.75rem] 2xl:text-[12.5rem] 2xl:leading-[10.75rem]">
            Jan
            <br />
            Marx
          </h1>
          <h2 className="h2Big">{text[language].Home.h2}</h2>
          <p className="font-semibold ml-15 font-text text-gray-500 text-[3.5vw] leading-[12vw] md:text-[1.5rem] md:leading-[3.5rem] lg:text-[1.25rem] lg:leading-[3.5rem] xl:text-[1.25rem] xl:leading-[4rem] 2xl:text-[1.75rem] 2xl:leading-[4.5rem]">
            {text[language].Home.p}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Home;
