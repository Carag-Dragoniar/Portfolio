import { text } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext } from "react";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-28 bg-n-5/30 border-t-4 border-n-5 flex items-center mt-[14rem]">
      <p className="h2 w-full text-center">
        &copy;{year + " "}
        {text[language].Footer.text}
      </p>
    </footer>
  );
};

export default Footer;
