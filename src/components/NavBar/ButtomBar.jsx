import styles from "./ButtomBar.module.css";
import React from "react";


export default function ButtomBar() {
  return (
    <div className={styles.button}>
      <div className={styles.bar}>
        <div className={`${styles.menueOpen} ${styles.up}`}>
          <div className={`${styles.line} ${styles.one}`}></div>
          <div className={`${styles.line} ${styles.two}`}></div>
          <div className={`${styles.line} ${styles.three}`}></div>
        </div>
        <div className={`${styles.menueOpen} ${styles.down}`}>
          <div className={`${styles.line} ${styles.one}`}></div>
          <div className={`${styles.line} ${styles.two}`}></div>
          <div className={`${styles.line} ${styles.three}`}></div>
        </div>
      </div>
    </div>
  );
}
