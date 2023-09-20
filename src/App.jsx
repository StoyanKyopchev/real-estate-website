import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import { useTranslation } from "react-i18next";
import Hero from "./Components/Hero/Hero.jsx";
import Main from "./Components/Main/Main.jsx";
import ChooseUs from "./Components/ChooseUs/ChooseUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AccDashboard from "./Components/Hero/AuthModal/AccDashboard.jsx";
import SignIn from "./Components/Hero/AuthModal/SignIn.jsx";
import SignUp from "./Components/Hero/AuthModal/SignUp.jsx";
import PrivateRoute from "./Components/Hero/AuthModal/PrivateRoute.jsx";
import PasswordReset from "./Components/Hero/AuthModal/PasswordReset.jsx";
import AccUpdate from "./Components/Hero/AuthModal/AccUpdate.jsx";
import "./CSS/global.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const TranslatorContext = React.createContext();

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <AuthProvider>
        <TranslatorContext.Provider value={{ t, i18n }}>
          <Routes>
              <Route 
                  exact path="/"
                  element={
                          <PrivateRoute>
                              <AccDashboard 
                                  isOpen={openModal} 
                                  onClose={() => setOpenModal(false)}
                              />
                          </PrivateRoute>
                  }
              />
              <Route 
                  path="/signup" 
                  element={<SignUp 
                              isOpen={openModal} 
                              onClose={() => setOpenModal(false)} 
                          />} 
              />
              <Route 
                  path="/signin" 
                  element={<SignIn 
                              isOpen={openModal} 
                              onClose={() => setOpenModal(false)} 
                          />} 
              />
              <Route
                  path="/passwordreset"
                  element={<PasswordReset
                              isOpen={openModal} 
                              onClose={() => setOpenModal(false)}  
                          />}
              />
              <Route 
                  path="/accountupdate"
                  element={
                          <PrivateRoute>
                              <AccUpdate
                                  isOpen={openModal}
                                  onClose={() => setOpenModal(false)}
                              />
                          </PrivateRoute>
                  }
              />
          </Routes>
          <Hero openModal={openModal} setOpenModal={setOpenModal} />
          <Main />
          <ChooseUs />
          <Footer />
        </TranslatorContext.Provider>
      </AuthProvider>
    </>
  );
}