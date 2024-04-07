import Link from "next/link.js";
import HomeHeader from "../HomeComponents/HomeHeader.js";
import "./ProductHeader.css";

export default function ProductHeader() {
  return ( 
    <div className="product-header">
      <HomeHeader />
      <p className="product-heading">Our Products</p>
    </div>
  );
}
