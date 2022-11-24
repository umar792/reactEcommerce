import React from "react";
import FeatureProduct from "./FeatureProduct";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trested from "./Trested";

const HomeE = () => {
  return (
    <>
      <HeroSection title="Lahore Store" imge="./images/hero.jpg" />
      <FeatureProduct />
      <Services />
      <Trested />
    </>
  );
};

export default HomeE;
