import PopupNotificationDelete from "../../components/Popup/PopupNotification/PopupNotificationDelete";
import { useEffect, useRef, useState } from "react";
import { useCars } from "../../context/CarItemsContext";
import styles from "./Catalogue.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useCarData from "../../hooks/useCarData";

function createVariants(delay) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
}

const pVariants = createVariants(0.7);
const h3Variants = createVariants(0.9);
const h2Variants = createVariants(1.1);
const btnOVariants = createVariants(1.3);
const btnTVariants = createVariants(1.5);
const imgVariants = createVariants(1.7);

export default function Hero() {
  const { addToCart } = useCars();
  const { result } = useCarData();
  const snackbarRef = useRef(null);
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    if (!result || result.length === 0) return;

    const mostRented = result.filter(
      (carItem) =>
        carItem.make === "Porsche" ||
        carItem.make === "Mercedes" ||
        carItem.make === "Ford" ||
        carItem.model === "Model S" ||
        carItem.model === "LS 500 F"
    );

    let index = 1;
    const updateRandomItem = () => {
      setRandomItem(mostRented[index]);
      index = (index + 1) % mostRented.length;
    };

    updateRandomItem();
    const intervalId = setInterval(updateRandomItem, 4000);

    return () => clearInterval(intervalId);
  }, [result]);

  function handelBuyNow(item) {
    addToCart(item);
    snackbarRef.current.showPopupsuccs();
  }

  if (!randomItem) return;
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <motion.p variants={pVariants} initial="hidden" animate="visible">
          Meet your new car
        </motion.p>
        <motion.h3 variants={h3Variants} initial="hidden" animate="visible">
          The Best Selling Cars Right Now
        </motion.h3>
        <motion.h2 variants={h2Variants} initial="hidden" animate="visible">
          <span
            key={randomItem.id}
            className={styles.show}
          >{`${randomItem.make} ${randomItem.model}`}</span>
        </motion.h2>
      </div>
      <div className={styles.btns}>
        <Link to={`details/${randomItem?.id}`}>
          <motion.button
            variants={btnOVariants}
            initial="hidden"
            animate="visible"
            className={styles.detailsBtn}
          >
            Details
          </motion.button>
        </Link>
        <motion.button
          variants={btnTVariants}
          initial="hidden"
          animate="visible"
          className={styles.buyNowBtn}
          onClick={() => handelBuyNow(randomItem)}
        >
          Buy Now
        </motion.button>
      </div>
      <div className={styles.heroImg}>
        <motion.div
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          className={styles.innerHeroImg}
        >
          <img
            key={randomItem.id}
            src={randomItem.mainImg}
            className={styles.show}
            alt="hero imge"
          />
        </motion.div>
      </div>

      <PopupNotificationDelete
        styless={"addedFromHome"}
        ref={snackbarRef}
        message={"Item Added Successfully!"}
      />
    </div>
  );
}
