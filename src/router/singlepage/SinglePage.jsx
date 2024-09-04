import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  let API = "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    fetch(API + "/" + id)
      .then((javob) => javob.json())
      .then((data) => setProduct(data))
      .catch((xato) => console.log(xato))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="singlepage">
      {loading ? (
        <Loader />
      ) : (
        <div className="single_wrapper">
          <h1>{product?.title}</h1>
          <img src={product?.image} alt={product?.title} />
          <p>{product?.description}</p>
          <p>{product?.price}</p>
        </div>
      )}
    </div>
  );
}

export default SinglePage;
