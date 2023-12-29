import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const themes = useContext(ThemeContext);

    return (
        <div>
            <h1 style={{ color: themes.secondary.text, backgroundColor: themes.secondary.main }}>Sabzlearn</h1>
        </div>
    );
};

export default Header;
