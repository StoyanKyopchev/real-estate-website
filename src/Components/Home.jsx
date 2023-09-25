import Hero from "../Components/Hero/Hero.jsx";
import Main from "../Components/Main/Main.jsx";
import ChooseUs from "../Components/ChooseUs/ChooseUs.jsx";

export default function Home({ openModal, setOpenModal, setLanguageMenuOpen, setSelectedProperty }) {
    return (
        <>
            <Hero 
                openModal={openModal} 
                setOpenModal={setOpenModal}
                setLanguageMenuOpen={setLanguageMenuOpen} 
            />
            <Main setSelectedProperty={setSelectedProperty} />
            <ChooseUs />
        </>
    )
}