import { text } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext } from "react";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer>
      <p>
        &copy;{Date().getFullYear()}
        {text[language].Footer.text}
      </p>
    </footer>
  );
};

export default Footer;
