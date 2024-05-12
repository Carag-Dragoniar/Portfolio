import Section from "./Section";
import Heading from "./Heading";
import { text } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext } from "react";

import UNOBLogo from "../assets/UNOB-logo.svg";
import INFISLogo from "../assets/InfisLogo.png";

const School = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section crosses classNameBorder="mt-10" id="School">
      <Heading>
        {text[language].Header.find((item) => item.id === "2").title}
      </Heading>
      <section className="flex mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.2222762801234!2d13.360680777100752!3d49.72544177146287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470aee0fb535527d%3A0x1bdbfa71e95b37d7!2zSU5GSVMg4oCUIFN0xZllZG7DrSDFoWtvbGEgaW5mb3JtYXRpa3kgYSBmaW5hbsSNbsOtY2ggc2x1xb5lYg!5e0!3m2!1scs!2scz!4v1714749679911!5m2!1scs!2scz"
          width="620"
          height="580"
          loading="lazy"
          className="transition-all opacity-40 hover:opacity-90 rounded-2xl border-n-4 border hidden lg:block"
        />
        <div className="ml-5">
          <p className="body-1 mt-5">
            {text[language].School.find((item) => item.id === "0").text}
          </p>
          <p className="body-1 mt-5">
            {text[language].School.find((item) => item.id === "0").text2}
          </p>
          <p className="body-1 mt-5">
            {text[language].School.find((item) => item.id === "0").text3}
          </p>
          <div className="flex flex-col sm:flex-row justify-around w-full items-center mt-5">
            <img
              src={INFISLogo}
              alt="INFIS logo"
              className="w-[40rem] h-[16rem] sm:w-[20rem] sm:h-[10rem] md:w-[25rem] md:h-[13rem]"
            />
            <img
              src={UNOBLogo}
              alt="UNOB logo"
              className="w-[16rem] h-[20rem] sm:w-[10rem] sm:h-[12rem]"
            />
          </div>
        </div>
      </section>
    </Section>
  );
};

export default School;
