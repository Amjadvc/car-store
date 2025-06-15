import styles from "./ButtomCross.module.css";
import React from "react";

export default function ButtomCross() {
  return (
    <div className={styles.button}>
      <div className={styles.cross}>
        <div className={`${styles.crossLine} ${styles.one}`}></div>
        <div className={`${styles.crossLine} ${styles.two}`}></div>
      </div>
    </div>
  );
}
