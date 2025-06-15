import React from "react";
import styles from "./HomeList.module.css";
import dataCarItems from "../../data/dummyCarsHome.json";

import HomeCarItem from "./HomeCarItem";

export default function HomeList() {
  return (
    <div className={styles.carList}>
      <div className={`container ${styles.carListContainer}`}>
        {dataCarItems.map((item) => (
          <HomeCarItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
