import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import commerce from "../commerce";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    commerce.products
      .list()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="py-12">
      <ProductList products={products} />
    </div>
  );
}
