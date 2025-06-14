import { NavLink } from "react-router-dom";
import styles from "./Privacy.module.css";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

const PrivacyVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
};

export default function Privacy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.termsContainer}>
      <motion.section
        variants={PrivacyVariants}
        initial="hidden"
        animate="visible"
        className={styles.termsbg}
      >
        <h1 className={styles.header1}>Privacy Policy</h1>
        <p className={`${styles.paraText} ${styles.lastUpdated}`}>
          Last Updated: {currentYear}
        </p>

        <p className={`${styles.paraText}`}>
          At
          <strong className={styles.cName}> ipsum</strong>, we are committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and safeguard your personal information when you use our website
          or services.
        </p>

        <h2 className={styles.header2}>1. Information We Collect</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            <strong>Personal Information:</strong> When you inquire about
            vehicles, schedule test drives, or make purchases, we collect your
            name, email, phone number, and address.
          </li>
          <li className={styles.liText}>
            <strong>Vehicle Preferences:</strong> Information about the cars
            you're interested in, including makes, models, and features.
          </li>
          <li className={styles.liText}>
            <strong>Technical Data:</strong> We automatically collect IP
            addresses, browser types, and usage patterns through cookies and
            analytics tools.
          </li>
        </ol>

        <h2 className={styles.header2}>2. How We Use Your Information</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            To process your vehicle inquiries, test drive requests, and
            purchases.
          </li>
          <li className={styles.liText}>
            To provide personalized recommendations and improve our services.
          </li>
          <li className={styles.liText}>
            For internal analytics to enhance website performance and user
            experience.
          </li>
          <li className={styles.liText}>
            To communicate with you about promotions, new arrivals, or service
            updates (only with your consent).
          </li>
        </ol>

        <h2 className={styles.header2}>3. Data Sharing & Protection</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            We do not sell your personal information to third parties.
          </li>
          <li className={styles.liText}>
            Data may be shared with trusted partners (financial institutions,
            insurance providers) only when necessary to complete your vehicle
            purchase.
          </li>
          <li className={styles.liText}>
            We implement industry-standard security measures including
            encryption and secure servers to protect your data.
          </li>
        </ol>

        <h2 className={styles.header2}>4. Your Rights</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            <strong>Access:</strong> You may request a copy of your personal
            data.
          </li>
          <li className={styles.liText}>
            <strong>Correction:</strong> You can update inaccurate information.
          </li>
          <li className={styles.liText}>
            <strong>Opt-out:</strong> You may unsubscribe from marketing
            communications at any time.
          </li>
        </ol>

        <h2 className={styles.header2}>5. Cookies & Tracking</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            Our website uses cookies to remember preferences and analyze
            traffic.
          </li>
          <li className={styles.liText}>
            You can disable cookies in your browser settings, though some
            features may not function properly.
          </li>
        </ol>

        <h2 className={styles.header2}>6. Policy Updates</h2>
        <ol className={styles.olStyle}>
          <li className={styles.liText}>
            We may update this policy periodically. The latest version will
            always be posted here with the current revision date.
          </li>
        </ol>

        <div className={styles.contactInfo}>
          <p className={styles.linkBlock}>
            <strong className={styles.st}>For privacy concerns:</strong>
          </p>
          <p className={styles.linkBlock}>
            Contact us at
            <a
              className={styles.linkTo}
              href="mailto:tagred@gmail.com"
              aria-label="mail to"
            >
              tagred@gmail.com
            </a>
          </p>

          <p className={styles.linkBlock}>
            or call
            <a
              className={styles.linkTo}
              href="tel:+971501234567"
              aria-label="phone"
            >
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
