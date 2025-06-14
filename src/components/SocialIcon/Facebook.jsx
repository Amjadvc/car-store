import styles from "./SocailIcons.module.css";
import React from "react";
function Facebook() {
  return (
    <a
      href="https://www.facebook.com"
      aria-label="facebook"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
    >
      <svg
        width="35"
        height="47"
        viewBox="0 0 35 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.iconSvg}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.3046 19.4667L29.4365 24.9505H19.0097V44.1437H12.6731V24.9505H3.16827V19.4667H12.6731V14.4409C12.6731 7.46829 17.622 2.96062 25.286 2.96062C28.5684 2.96062 30.6151 3.11144 31.7969 3.24852L31.705 8.44166L26.8321 8.44988C26.6991 8.43891 23.5245 8.22505 21.2338 10.0457C19.7574 11.2164 19.0097 12.8999 19.0097 15.0441V19.4668H30.3046V19.4667ZM23.3597 12.0774C24.608 11.0711 26.5533 11.1808 26.6959 11.1863L34.8258 11.1835L35 1.03583L33.777 0.775349C32.9913 0.608126 30.5866 0.21875 25.286 0.21875C15.8477 0.21875 9.50483 5.93558 9.50483 14.4409V16.7249H0V27.6924H9.50483V46.8856H22.178V27.6924H32.1961L33.9354 16.7249H22.178V15.0441C22.178 13.7088 22.5772 12.7108 23.3597 12.0774Z"
          fill="#808080"
          className={styles.iconSvgPath}
        />
      </svg>
    </a>
  );
}

export default Facebook;
