import React from "react";
import styles from "./SliderCarousel.module.css";
import Carousel from "react-multi-carousel";
import SliderControls from "./SliderControls";
import SliderItem from "./SliderItem";

export default function SliderCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    large: {
      breakpoint: { max: 3000, min: 992 },
      items: 4,
    },
    medum: {
      breakpoint: { max: 992, min: 769 },
      items: 3,
    },
    medumSmall: {
      breakpoint: { max: 769, min: 600 },
      items: 3,
    },
    medumSmallMore: {
      breakpoint: { max: 600, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  const sliderData = [
    {
      id: 1,
      imge: "/images/slider/car-porsche-unsplash.webp",
      text: "Porsche",
    },
    {
      id: 2,
      imge: "/images/slider/car-bmw-unsplash.webp",
      text: "Bmw",
    },
    {
      id: 3,
      imge: "/images/slider/car-mercedes-unsplash.webp",
      text: "Mercedes",
    },
    {
      id: 4,
      imge: "/images/slider/car-audi-unsplash.webp",
      text: "Audi",
    },
  ];

  return (
    <div className={styles.customContainer}>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={false}
        customButtonGroup={<SliderControls />}
      >
        {sliderData.map((item) => (
          <SliderItem item={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
}
