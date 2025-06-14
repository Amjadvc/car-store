import styles from "./Logo.module.css";
import React from "react";

import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        fill="none"
        viewBox="0 0 169 41"
      >
        <g clipPath="url(#clip0_358_35)">
          <path
            fill={`var(--color-primary-1)`}
            fillRule="evenodd"
            d="M10.015 3v37.5H0V3h10.015zM15.022 3h21.282c6.913 0 12.518 5.596 12.518 12.5S43.217 28 36.304 28H25.037v12.5H15.022V3zm10.015 15h11.267a2.502 2.502 0 002.503-2.5c0-1.38-1.12-2.5-2.503-2.5H25.037v5zM86.378 3v19.375c0 4.487 3.643 8.125 8.137 8.125 4.494 0 8.137-3.638 8.137-8.125V3h10.015v19.375c0 10.01-8.127 18.125-18.152 18.125s-18.152-8.115-18.152-18.125V3h10.015z"
            clipRule="evenodd"
          ></path>
          <path
            fill={`var(--color-primary-1)`}
            fillRule="evenodd"
            d="M52.578 20.5c0-9.665 7.846-17.5 17.526-17.5h2.503v10h-2.503c-4.149 0-7.511 3.358-7.511 7.5v1.25c0 10.355-8.408 18.75-18.778 18.75h-1.252v-10h1.252c4.84 0 8.763-3.918 8.763-8.75V20.5z"
            clipRule="evenodd"
          ></path>
          <path
            fill={`var(--color-primary-1)`}
            d="M169 4.25A3.753 3.753 0 01165.244 8a3.752 3.752 0 01-3.755-3.75A3.752 3.752 0 01165.244.5 3.753 3.753 0 01169 4.25z"
          ></path>
          <path
            fill={`var(--color-primary-2)`}
            fillOpacity="0.2"
            d="M169 4.25A3.753 3.753 0 01165.244 8a3.752 3.752 0 01-3.755-3.75A3.752 3.752 0 01165.244.5 3.753 3.753 0 01169 4.25z"
          ></path>
          <path
            fill={`var(--color-primary-1)`}
            d="M123.42 40.5l4.779-19.982 3.553 12.021c2.118 7.17 12.289 7.17 14.408 0l3.552-12.02 4.779 19.981h10.296l-7.514-31.42c-1.787-7.473-12.332-7.75-14.51-.381l-3.807 12.884L135.148 8.7c-2.177-7.368-12.723-7.092-14.51.38L113.124 40.5h10.296z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_358_35">
            <path
              fill={`var(--color-primary-2)`}
              d="M0 0H169V40H0z"
              transform="translate(0 .5)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}

export default Logo;
