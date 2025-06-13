import { motion } from "framer-motion";
import styles from "./LandingPage.module.css";
import carBg from "../../assets/images/carBg.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const contentVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 60,
      ease: "easeIn",
      duration: 1,
    },
  },
};
const landingCarBgVariants = {
  hidden: {
    x: +100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      ease: "easeIn",
      duration: 1,
    },
  },
};

function LandingPage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`container ${styles.homeContainr}`}>
      <motion.div
        className={styles.content}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <p className={styles.textHeader}>Arriving Summer {currentYear}</p>
        <h1 className={styles.mainText}>
          <span className={`${styles.highlight} ${styles.waveText}`}>
            {"MAKE".split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {char}
              </span>
            ))}
          </span>
          EVERY DAY LEGENDARY.
        </h1>
        <p className={styles.textFooter}>
          The perfect fusion of comfort, luxury, and power awaits — own your
          dream car today and drive into the future with style and confidence.
        </p>
        <Link to={"/catalogue"}>
          <Button>EXPLORE</Button>
        </Link>
      </motion.div>
      <div className={styles.image}>
        <motion.img
          className={`${styles.landingCarBg} `}
          variants={landingCarBgVariants}
          initial="hidden"
          animate="visible"
          src={carBg}
          alt="landing-bg"
        />
      </div>
    </div>
  );
}

export default LandingPage;
