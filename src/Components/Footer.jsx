import { text } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext } from "react";

import dragon from "../assets/dragon.gif";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full">
      <img src={dragon} width={300} alt="" className="animate-fly" />
      <div className="w-full h-28 bg-n-5/30 border-t-4 border-n-5 flex items-center">
        <p className="h2 w-full text-center">
          &copy;{year + " "}
          {text[language].Footer.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
