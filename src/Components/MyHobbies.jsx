import Section from "./Section";
import Heading from "./Heading";
import { text } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext } from "react";

import target from "../assets/target.svg";
import gun from "../assets/gun.svg";
import dragon from "../assets/dragon.svg";
import DnD from "../assets/DnD.svg";

const MyHobbies = () => {
  const { language } = useContext(LanguageContext);

  const images = {
    target: target,
    gun: gun,
    dragon: dragon,
    DnD: DnD,
  };

  return (
    <Section crosses classNameBorder="mt-10" id="MyHobbies">
      <Heading>
        {text[language].Header.find((item) => item.id === "3").title}
      </Heading>
      {text[language].Hobbies.map((item) => (
        <section key={item.id}>
          <h2 className="h2Big mt-5 text-[2.75rem] md:text-[3rem] lg:text-[2.25rem]">
            {item.title}
          </h2>
          <div className="hobby">
            <h3 className="h2 sm:pl-5">{item.heading}</h3>
            <div className="flex">
              <p className="body-2 py-5 sm:px-5">{item.text}</p>
              <img
                src={images[item.img]}
                alt="Target"
                className="hidden md:block"
                width={150}
              />
            </div>
            <div className="w-[30%] sm:border-b border-n-5"></div>
          </div>
          <div className="hobby">
            <h2 className="h2 sm:pl-5">{item.heading2}</h2>
            <div className="flex">
              <p className="body-2 py-5 sm:px-5">{item.text2}</p>
              <img
                src={images[item.img2]}
                alt="Gun"
                className="hidden md:block"
                width={150}
              />
            </div>
            <div className="w-[30%] sm:border-b border-n-5"></div>
          </div>
        </section>
      ))}
    </Section>
  );
};

export default MyHobbies;
