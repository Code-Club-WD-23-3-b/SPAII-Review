import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Dropdown = () => {
    const { setColor } = useContext(ThemeContext);

    return (
        <select onChange={(e) => setColor(e.target.value)}>
            <option value="black">black</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
        </select>
    )
}

export default Dropdown; 