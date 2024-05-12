import { LanguageProvider } from "./languageContext.jsx";
import Header from "./Components/Header";
import ButtonGradient from "./assets/ButtonGradient";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import School from "./Components/School";
import MyHobbies from "./Components/MyHobbies";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <Skills />
        <School />
        <MyHobbies />
        <ContactMe />
        <Footer />
      </div>
      <ButtonGradient />
    </LanguageProvider>
  );
};

export default App;
