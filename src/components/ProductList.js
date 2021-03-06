import React from "react";
import { Link } from "react-router-dom";
import PRODUCTSINFO from "./ProductsInfo";
import "../styles/ProductList.css";
import img1 from "../images/products/product1.jpg";
import img2 from "../images/products/product2.jpg";

class ProductList extends React.Component {
  render() {
    const products = [];
    var flag=false;
    PRODUCTSINFO.forEach(product => {
      let path = "/en/Product/" + product.id;
      products.push(
        <div className='product-individual' key={product.id}>
          <Link to={path}>
            <img src={flag?img2:img1} alt="product-img" className="product-img" />
          </Link>
          <div className="product-text">
            <div className="product-model">
              Model:
              {product.model}
            </div>
            <div className="product-description">{product.description}</div>
          </div>
        </div>
      );
      flag=true;
    });
    return <div className="product-list">{products}</div>;
  }
}

export default ProductList;
