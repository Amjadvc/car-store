import styles from "./Lodaing.module.css";
import React from "react";

function Lodaing() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Lodaing;
