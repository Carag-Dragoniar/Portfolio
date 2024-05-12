import Section from "./Section";
import Heading from "./Heading";
import { text } from "./../constants/index";
import { LanguageContext } from "../languageContext.jsx";
import { useContext, useState } from "react";
import emailjs from "@emailjs/browser";

import Phone from "../assets/phone.svg";
import map from "../assets/map.svg";

const ContactMe = () => {
  const { language } = useContext(LanguageContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [fake, setFake] = useState("");

  const form = text[language].ContactMe.form;

  const templateParams = {
    name,
    email,
    message,
    phone,
  };

  const icons = {
    map: map,
    Phone: Phone,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fake === "") {
      emailjs
        .send("service_090909", "template_090909", templateParams, {
          publicKey: "dEdd7kcwI8O9RBiwm",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("BOT!!!!");
    }
  };

  return (
    <Section crosses classNameBorder="mt-10" id="ContactMe">
      <Heading>
        {text[language].Header.find((item) => item.id === "4").title}
      </Heading>
      <div className="flex flex-col md:flex-row w-full">
        <section className="flex flex-col justify-around w-full md:w-[50%] border-b md:border-b-0 md:border-r border-n-5/50 sm:pl-10 py-5 md:py-0 md:pl-0 md:mt-5">
          {text[language].ContactMe.info.map((item) => (
            <div key={item.id} className="flex items-center">
              <img
                src={icons[item.img]}
                alt={item.img}
                width={86}
                className="mr-5 hidden sm:block"
              />
              <p className="h2 text-n-2 text-center w-full sm:w-auto sm:text-left">
                {item.text}
              </p>
            </div>
          ))}
        </section>
        <section className="flex justify-center align-center w-full md:w-[50%] h-full">
          <form method="post" className="flex flex-col w-[90%] h-full">
            <input
              type="text"
              name="name"
              placeholder={form.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form"
              tabIndex="1"
            />
            <input
              type="email"
              name="email"
              placeholder={form.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form"
              tabIndex="2"
            />
            <input
              type="tel"
              name="tel"
              placeholder={form.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form"
              tabIndex="3"
            />
            <textarea
              name="message"
              id="message"
              placeholder={form.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form"
              rows={5}
              tabIndex="4"
            />
            <input
              type="hidden"
              name="fake_field"
              value={fake}
              onChange={(e) => setFake(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="form w-[80%] sm:w-[50%] self-center"
            >
              {form.button}
            </button>
          </form>
        </section>
      </div>
    </Section>
  );
};

export default ContactMe;
