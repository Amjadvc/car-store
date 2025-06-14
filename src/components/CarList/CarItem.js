import styles from "./CarItem.module.css";
import seatorImg from "../../assets/svg/carListIconOne.svg";
import electricFueling from "../../assets/svg/electric-refueling.svg";
import gasDieselFueling from "../../assets/svg/gas-diesel.svg";
import manualImg from "../../assets/svg/carListIconTwo.svg";
import speedImg from "../../assets/svg/carListIconThree.svg";
import Button from "../Button/Button";
import PopupNotificationDelete from "../Popup/PopupNotification/PopupNotificationDelete";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCars } from "../../context/CarItemsContext";
import { useHomeVariants } from "../../context/HomeVariantsContext";
import { useRef } from "react";

export default function CarItem({ item }) {
  const {
    make: carName,
    model,
    fuelType,
    transmission,
    price,
    horsepower,
  } = item;
  const { addToCart } = useCars();
  const { homeVariant } = useHomeVariants();

  const snackbarRef = useRef(null);

  function handelBuyNow(item) {
    addToCart(item);
    snackbarRef.current.showPopupsuccs();
  }

  return (
    <motion.div
      className={styles.carItem}
      variants={homeVariant}
      initial="hidden"
      whileInView="visible"
    >
      <div className={styles.imgeContainer}>
        <img src={item.mainImg} alt={`car ${item.make}`} loading="lazy" />
      </div>

      <div className={styles.discriptionCard}>
        <div className={styles.cardHeader}>
          <h3>{carName === "Mercedes-Benz" ? "Mercedes" : carName}</h3>
          <span>{model}</span>
        </div>

        <div className={styles.properties}>
          <div className={styles.inner}>
            <img
              src={fuelType === "Electric" ? electricFueling : gasDieselFueling}
              alt="fuelType svg"
            />
            <p>
              <span>{fuelType}</span>
            </p>
          </div>
          <div className={styles.inner}>
            <img src={manualImg} alt="transmission svg" />
            <p>{transmission}</p>
          </div>
          <div className={styles.inner}>
            <img src={speedImg} alt="speed svg" />
            <p>{horsepower} HP</p>
          </div>
        </div>
        <p>
          Own it from <span className={styles.priceH}>${price}</span>
        </p>
      </div>
      <div className={styles.buttons}>
        <Link to={`details/${item.id}`}>
          <Button className={styles.buttonDetails}>Details &gt;</Button>
        </Link>
        <Button onClickHandler={() => handelBuyNow(item)}>Buy Now</Button>
      </div>

      <PopupNotificationDelete
        styless={"addedFromHome"}
        ref={snackbarRef}
        message={"Item Added Successfully!"}
      />
    </motion.div>
  );
}
