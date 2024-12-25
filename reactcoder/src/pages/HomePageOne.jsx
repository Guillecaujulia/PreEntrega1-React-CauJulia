import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
const HomePageOne = () => {

  return (

    <>

      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#3C6978" />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />


    </>
  );
};

export default HomePageOne;
