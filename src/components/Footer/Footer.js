import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import location from "../../assets/svg/footerLcation.svg";
import phone from "../../assets/svg/footerPhone.svg";
import mail from "../../assets/svg/footerMail.svg";
import Facebook from "../SocialIcon/Facebook";
import Instagram from "../SocialIcon/Instagram";
import Twiter from "../SocialIcon/Twiter";

import Waves from "../Waves/Waves";
import FooterItem from "./FooterItem";
function Footer() {
  const footerData = [
    {
      name: <Logo />,
      childern: [{ name: "CAR COMPANY" }],
    },
    {
      name: "Menu",
      childern: [
        { name: "Home", path: "/" },
        { name: "Catalogue", path: "/catalogue" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Help", path: "/help" },
      ],
    },
    {
      name: "Further Information ",
      childern: [
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
      ],
    },
    {
      name: "Contact us",
      childern: [
        {
          icon: location,
          name: "Dubai, UAE",
          type: "location",
          link: "https://maps.app.goo.gl/hT4UcjejpczAc4yw7",
        },
        {
          icon: phone,
          name: "+971 50 123 4567",
          type: "phone",
          link: "tel:+971501234567",
        },
        {
          icon: mail,
          name: "tagred@gmail.com",
          type: "email",
          link: "mailto:tagred@gmail.com",
        },
      ],
    },
    {
      name: "Follow us",
      childern: [
        { svg: <Facebook /> },
        { svg: <Instagram /> },
        { svg: <Twiter /> },
      ],
    },
  ];
  return (
    <footer className={styles.footer}>
      <Waves />
      <div className={`container ${styles.footerContainer}`}>
        {footerData.map((section) => (
          <FooterItem section={section} key={crypto.randomUUID()} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
