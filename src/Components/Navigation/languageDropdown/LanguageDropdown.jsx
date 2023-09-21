import { useContext } from "react";
import { TranslatorContext } from "../../../App";
import "./languageDropdown.css";

const locales = {
    en: { title: "English" },
    fr: { title: "Français" }
};

export default function LanguageDropdown({ languageMenuOpen, toggleLanguageDropdown }) {
    const { i18n } = useContext(TranslatorContext);

    return (
        <>
            <ul className={`languageDropdown ${languageMenuOpen ? "languageDropdownActive" : ""}`}>
                {Object.keys(locales).map((locale) => (
                    <li key={locale}>
                        <button onClick={() => {
                            i18n.changeLanguage(locale);
                            toggleLanguageDropdown();}}
                        >
                            {locales[locale].title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}