import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import Breadcrumb from "../components/Breadcrumb";
import CartSection from "../components/CartSection";
import ScrollToTop from "react-scroll-to-top";


const CartPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#3C6978" />

      {/* Preloader */}
      <Preloader />

           {/* Breadcrumb */}
      <Breadcrumb title={"Carrito de Compras"} />

      {/* CartSection */}
      <CartSection />

    </>
  );
};

export default CartPage;
