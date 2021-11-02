import React, { useContext } from "react";
import styles from "./index.module.css";
import colors from "../../data/colors.js";
import { AppContext } from "../../contexts/AppContext";

const ColorsPiker = () => {
  const { selectedColor, setSelectedColor } = useContext(AppContext);

  const eachColorOption = (color) => {
    return (
      <div
        key={color.name}
        className={`${styles.color} ${selectedColor === color && styles.selected_color}`}
        style={{ backgroundColor: color.hex }}
        onClick={() => setSelectedColor(color)}
      />
    );
  } 

  const colorOptions = () => {
    return colors.map(color => eachColorOption(color));
  }

  return (
    <div className={styles.color_picker}>
      <p>Select your favorite color</p>
      {colorOptions()}
    </div>
  )
}

export default ColorsPiker;