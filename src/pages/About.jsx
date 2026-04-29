import { Link } from "react-router-dom";
import { getProductById, getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

function About() {
  // Getting the products from products.js
  const products = getProducts();

  return (
    <>
      <div className="page">
        
      </div>
    </>
  );
}

export default About;
