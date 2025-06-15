import React from "react";
import styles from "./Home.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import LandingPage from "../../components/LandingPage/LandingPage";
import PageNav from "../../components/PageNav/PageNav";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import HomeList from "../../components/HomeListComponents/HomeList";
import { HomeVariantsProvider } from "../../context/HomeVariantsContext";

export default function Home() {
  return (
    <div>
      <HomeVariantsProvider>
        <PageNav className={styles.bgColor} />
        <main className={styles.home}>
          <LandingPage />
          <HeaderText className={styles.carSlide}>
            View Our Top Picks
          </HeaderText>
          <Slider />
          <HeaderText className={styles.carList}>Top Categories</HeaderText>
          <HomeList />
          <Footer />
        </main>
      </HomeVariantsProvider>
    </div>
  );
}
