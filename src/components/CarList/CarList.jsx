import styles from "./CarList.module.css";
import React from "react";
import CarItem from "./CarItem";
function CarList({ result, selectedCategory }) {
  return (
    <div className={styles.carList}>
      <div className={`container ${styles.carListContainer}`}>
        {result.length === 0 && selectedCategory !== null && (
          <div className={styles.noDataFound}>
            We're sorry, but there are currently no cars that match the category
            you have chosen.
          </div>
        )}

        {result.map((item) => (
          <CarItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default CarList;
