import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckoutBag from "../assets/CheckoutBag";
import styles from "./Details.module.css";

const Details = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  let navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  const handleCheckout = () => {
      navigate("/checkout")
  };

  return (
    <div>
      <div className={styles.detailsNav}>
        <h1>Details Page</h1>
        <CheckoutBag onClick={handleCheckout} />
      </div>
      <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product?.rating?.count}</p>
        <img
          className={styles.detailsImage}
          src={product?.image}
          alt={product?.title}
        />
      </div>
    </div>
  );
};

export default Details;
