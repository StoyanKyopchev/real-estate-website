import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import { useTranslation } from "react-i18next";
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer.jsx";
import AccDashboard from "./Components/AuthModal/AccDashboard.jsx";
import SignIn from "./Components/AuthModal/SignIn.jsx";
import SignUp from "./Components/AuthModal/SignUp.jsx";
import PrivateRoute from "./Components/AuthModal/PrivateRoute.jsx";
import PasswordReset from "./Components/AuthModal/PasswordReset.jsx";
import AccUpdate from "./Components/AuthModal/AccUpdate.jsx";
import SelectedProperty from "./Components/SelectedProperty/SelectedProperty";
import Home from "./Components/Home";
import "./CSS/global.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const TranslatorContext = React.createContext();

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [selectedProperty, setSelectedProperty] = useState(0);
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  function toggleLanguageDropdown() {
    setLanguageMenuOpen(!languageMenuOpen);
  }

  return (
    <>
      <AuthProvider>
        <TranslatorContext.Provider value={{ t, i18n }}>
          <Navigation 
            setOpenModal={setOpenModal} 
            toggleLanguageDropdown={toggleLanguageDropdown}
            languageMenuOpen={languageMenuOpen}
          />
          {previousLocation && (
            <Routes>
              <Route 
                path="/sign-up" 
                element={
                  <SignUp 
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)} 
                  />
                } 
              />
              <Route 
                path="/sign-in" 
                element={
                  <SignIn 
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                  />
                } 
              />
              <Route
                path="/password-reset"
                element={
                  <PasswordReset
                    isOpen={openModal} 
                    onClose={() => setOpenModal(false)}  
                  />
                }
              />
              <Route 
                path="/account-update"
                element={
                  <PrivateRoute>
                    <AccUpdate
                      isOpen={openModal}
                      onClose={() => setOpenModal(false)}
                    />
                  </PrivateRoute>
                }
              />
              <Route
                path="/account-dashboard"
                element={
                  <PrivateRoute>
                    <AccDashboard 
                      isOpen={openModal} 
                      onClose={() => setOpenModal(false)}
                    />
                  </PrivateRoute> 
                }
              />
            </Routes>
          )}
          <Routes location={previousLocation || location}>
            <Route 
              exact path="/"
              element={
                <Home 
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  setLanguageMenuOpen={setLanguageMenuOpen}
                  setSelectedProperty={setSelectedProperty}
                />
              }
            >
            </Route>
            <Route 
              path="/selected-property"
              element={
                <SelectedProperty 
                  selectedProperty={selectedProperty} 
                  setSelectedProperty={setSelectedProperty} 
                />
              }
            />
          </Routes>
          <Footer />
        </TranslatorContext.Provider>
      </AuthProvider>
    </>
  );
}