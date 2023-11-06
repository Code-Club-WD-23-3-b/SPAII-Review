import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const TextDisplay = () => {
    const { color } = useContext(ThemeContext);

    return (
        <div>
            <p style={{ color }}> Hallo welt, welche farbe hat mein Text?</p>
        </div>
    )
}

export default TextDisplay;