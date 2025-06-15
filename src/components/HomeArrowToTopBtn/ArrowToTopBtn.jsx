import styles from "./ArrowToTopBtn.module.css";
import React from "react";
import { useEffect, useState } from "react";
import arrowUp from "../../assets/svg/arrow-up.svg";
function ArrowToTopBtn() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1033) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  function handelArrowUp() {
    window.scrollTo({
      top: -20,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`${styles.arrowUp} ${backToTop ? styles.showArrow : ""}`}
      onClick={handelArrowUp}
    >
      <img src={arrowUp} alt="arrow up" />
    </button>
  );
}

export default ArrowToTopBtn;
