import styles from "./ButtonColor.module.css";
import React from "react";
function ButtonColor({ itemColor, handelActiveColor, isActiveColor }) {
  return (
    <button
      onClick={handelActiveColor}
      style={{ backgroundColor: itemColor }}
      className={`${styles.buttonColors} ${isActiveColor && styles.activeColor}
      ${isActiveColor && styles.theamActiveColor}
      
   `}
    ></button>
  );
}

export default ButtonColor;
