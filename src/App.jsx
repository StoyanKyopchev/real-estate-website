import Hero from "./Components/Hero/Hero.jsx";
import Main from "./Components/Main/Main.jsx";
import ChooseUs from "./Components/ChooseUs/ChooseUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./CSS/global.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Hero />
      <Main />
      <ChooseUs />
      <Footer />
    </>
  );
}

export default App;