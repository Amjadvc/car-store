import styles from "./ErrorMessage.module.css";
import React from "react";
function ErrorMessage({ message }) {
  return <div className={styles.error}>{message} </div>;
}

export default ErrorMessage;
