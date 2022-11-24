import { Route, Routes } from "react-router-dom";
import AboutE from "./AboutE";
import Card from "./Card";
import ContactE from "./ContactE";
import ErrorPage from "./ErrorPage";
import HomeE from "./HomeE";
import Nave from "./Nave";
import Product from "./Product";
import SingleProduct from "./SingleProduct";
import "./Nave.css";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <Nave />
      <Routes>
        <Route exact path="/" element={<HomeE />} />

        <Route exact path="/about" element={<AboutE />} />

        <Route exact path="/contact" element={<ContactE />} />

        <Route exact path="/card" element={<Card />} />

        <Route exact path="/product" element={<Product />} />

        <Route exact path="/singleproduct/:id" element={<SingleProduct />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
