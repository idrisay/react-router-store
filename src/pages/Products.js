import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h1>Products Page</h1>
      <div className={styles.products}>
        {products.map((product) => (
          //   <Link to={`details/${product?.id}`} key={product.id}>
          <Link className={styles.product} to={`/details/${product?.id}`} key={product.id}>
            <h3>{product.title}</h3>
            <p>{product?.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
