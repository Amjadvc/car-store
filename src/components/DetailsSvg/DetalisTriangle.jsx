import styles from "./DetalisTriangle.module.css";
import React from "react";

function DetalisTriangle() {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`${styles.arrowDownSvg}  `}
    >
      <path
        d="M1200 0L0 0 598.97 114.72 1200 0z"
        className="shape-fill"
        fill="#f4f4f4"
        fillOpacity="1"
      ></path>
    </svg>
  );
}

export default DetalisTriangle;
