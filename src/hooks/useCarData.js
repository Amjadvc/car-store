import { useState, useMemo } from "react";
import mockCars from "../data/mockCars.json";

function useCarData() {
  const [carsData] = useState(mockCars);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const handleChange = (obj) => {
    setSelectedCategory(obj);
  };

  const filteredData = useMemo(() => {
    if (!selectedCategory) return carsData;

    const { make, model, price, fuelType } = selectedCategory;
    let minPrice = 0,
      maxPrice = Infinity;

    if (price !== "All") {
      const priceArray = price.split("-").map(Number);
      minPrice = Math.min(...priceArray);
      maxPrice = Math.max(...priceArray);
    }

    return carsData.filter(
      ({
        make: carMake,
        price: carPrice,
        fuelType: carFuelType,
        model: carModel,
      }) => {
        return (
          (make === "All" || carMake === make) &&
          (model === "All" || carModel === model) &&
          (price === "All" || (carPrice > minPrice && carPrice <= maxPrice)) &&
          (fuelType === "All" || carFuelType === fuelType)
        );
      }
    );
  }, [carsData, selectedCategory]);

  const result = useMemo(() => {
    return filteredData.map((car) => {
      let mainColor = car.color.toLowerCase();

      if (mainColor === "black") {
        mainColor = "darkcyan";
      } else if (mainColor === "white") {
        mainColor = "tomato";
      }
      return {
        ...car,
        colors: [mainColor, "white", "black"],
        choosenColor: mainColor,
      };
    });
  }, [filteredData]);

  return {
    // isLoading,
    selectedCategory,
    handleChange,
    result,
  };
}

export default useCarData;
