import { NavLink } from "react-router-dom";
import styles from "./Terms.module.css";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

const TermsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
};

export default function Terms() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.termsContainer}>
      <motion.section
        variants={TermsVariants}
        initial="hidden"
        animate="visible"
        className={styles.termsbg}
      >
        <h1 className={styles.header1}>Terms And Conditions</h1>
        <p className={`${styles.paraText} ${styles.lastUpdated}`}>
          Last Updated: {currentYear}
        </p>

        <p className={`${styles.paraText}`}>
          Welcome to <strong className={styles.cName}> ipsum.</strong> By
          accessing and using our website, you agree to comply with the
          following Terms & Conditions. Please read them carefully before
          proceeding.
        </p>

        <h2 className={styles.header2}>1. General Terms</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            This website is owned and operated by
            <strong className={styles.cName}> ipsum</strong>.
          </li>
          <li className={styles.liText}>
            All content, including images, text, and logos, is the property of
            <strong className={styles.cName}> ipsum</strong> and protected by
            copyright laws.
          </li>
          <li className={styles.liText}>
            By using this site, you confirm that you are at least 18 years old
            or accessing it under parental supervision.
          </li>
        </ol>

        <h2 className={styles.header2}>2. Vehicle Purchases & Orders</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            All car specifications, pricing, and availability are subject to
            change without notice.
          </li>
          <li className={styles.liText}>
            A deposit may be required to secure a vehicle.
          </li>
          <li className={styles.liText}>
            Final pricing includes taxes, registration, and fees unless
            otherwise stated.
          </li>
        </ol>

        <h2 className={styles.header2}>3. Test Drives & Bookings</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            Test drives are subject to availability and require a valid driver's
            license.
          </li>
          <li className={styles.liText}>
            <strong className={styles.cName}> ipsum</strong> reserves the right
            to refuse service at any time.
          </li>
        </ol>

        <h2 className={styles.header2}>4. Limitation of Liability</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            We are not responsible for any inaccuracies in vehicle descriptions
            or pricing.
          </li>
          <li className={styles.liText}>
            <strong className={styles.cName}> ipsum</strong> is not liable for
            any damages arising from website use or vehicle purchases.
          </li>
        </ol>

        <h2 className={styles.header2}>5. Governing Law</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            These terms are governed by the laws of
            <strong> Emirates</strong>.
          </li>
        </ol>

        <div className={styles.contactInfo}>
          <p className={styles.linkBlock}>
            <strong className={styles.st}>For privacy concerns:</strong>
          </p>
          <p className={styles.linkBlock}>
            Contact us at
            <a className={styles.linkTo} href="mailto:tagred@gmail.com">
              tagred@gmail.com
            </a>
          </p>

          <p className={styles.linkBlock}>
            or call
            <a className={styles.linkTo} href="tel:+971501234567">
              +971 50 123 4567
            </a>
            .
          </p>
        </div>

        <NavLink to="/" className={styles.link}>
          <Button className={styles.buttonBack}>BACK TO HOMEPAGE</Button>
        </NavLink>
      </motion.section>
    </div>
  );
}
