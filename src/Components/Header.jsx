import { useState, useContext } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { text } from "./../constants/index";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "./../assets/MenuSvg";
import BackgroundSm from "./BackgroundSm";

import codingNav from "../assets/codingNav.svg";
import flag_CZ from "../assets/flag_CZ.svg";
import flag_UK from "../assets/flag_UK.svg";

import { LanguageContext } from "../languageContext.jsx";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm 
      ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className=" relative flex items-center px-5 lg:px-7.5 xl:px-8 max-lg:py-4">
        <a href="#Home">
          <h1 className="h2">Marx Jan</h1>
        </a>

        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          {openNavigation && <BackgroundSm />}
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {text[language].Header.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-title text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 xl:px-9 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <div
          className={`absolute lg:top-[6.5rem] lg:h-[5rem] xl:h-[10rem] lg:w-[2rem] xl:w-[5rem] lg:right-1 2xl:right-[3rem] lg:shadow-2xlCustom ${
            openNavigation
              ? "flex mx-auto top-[10rem] left-0 right-0 w-[8rem]"
              : "hidden"
          } lg:flex lg:flex-col items-center justify-around backdrop-blur-md bg-n-8/90 border border-[#38363c] rounded-xl`}
        >
          <img
            src={flag_CZ}
            alt="Flag CZ"
            width={60}
            className={`transition-all cursor-pointer p-2 lg:px-1 opacity-50 hover:opacity-100`}
            onClick={() => {
              changeLanguage("CZ");
            }}
          />
          <img
            src={flag_UK}
            alt="Flag UK"
            width={60}
            className={`transition-all cursor-pointer p-2 lg:px-1 opacity-50 hover:opacity-100`}
            onClick={() => {
              changeLanguage("EN");
            }}
          />
        </div>
        <a href="#Skills" className="my-auto hidden lg:block">
          <img
            src={codingNav}
            alt="coding Image"
            width={64}
            height={64}
            className="invert my-auto hidden lg:block"
          />
        </a>
        <Button
          className=" ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
