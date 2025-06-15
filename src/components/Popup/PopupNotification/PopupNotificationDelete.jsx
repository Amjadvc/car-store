import React from "react";
import { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./PopupNotificationDelete.module.css";
import checkIcon from "../../../assets/svg/check.svg";
const PopupNotificationDelete = forwardRef(({ message, styless }, ref) => {
  const [showPopupDSuccess, setsShowPopupDSuccess] = useState(false);
  useImperativeHandle(ref, () => ({
    showPopupsuccs() {
      setsShowPopupDSuccess(true);
      setTimeout(() => {
        setsShowPopupDSuccess(false);
      }, 1750);
    },
  }));
  return (
    <div
      className={`${styles.popupContainer} ${
        showPopupDSuccess ? styles.active : ""
      } ${styles[styless]}`}
    >
      <div className={styles.symbol}>
        <img src={checkIcon} alt="Check icon" />
      </div>
      <div>{message}</div>
    </div>
  );
});

export default PopupNotificationDelete;
