import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "./Components/Hero/Hero.jsx";
import Main from "./Components/Main/Main.jsx";
import ChooseUs from "./Components/ChooseUs/ChooseUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./CSS/global.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const TranslatorContext = React.createContext();

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <TranslatorContext.Provider value={{ t, i18n }}>
        <Hero />
        <Main />
        <ChooseUs />
        <Footer />
      </TranslatorContext.Provider>
    </>
  );
}