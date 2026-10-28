import MoonIcon from "./MoonIcon.jsx";
import SunIcon from "./SunIcon.jsx";
import "../styles/Header.css";

export default function Header({ themeMode = "light", toggleTheme }) {
    return (
        <header>
            <h1>Memory Card</h1>
            <button onClick={toggleTheme}>
                {themeMode === "light" ?
                    <SunIcon /> :
                    <MoonIcon />
                }
            </button>
        </header>
    );
}