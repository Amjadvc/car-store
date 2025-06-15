import styles from "./DetailsHeader.module.css";
import React from "react";

function DetailsHeader({ children }) {
  return <h3 className={styles.detailsHeader}>{children}</h3>;
}

export default DetailsHeader;
