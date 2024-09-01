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
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (error.length > 0)
      console.log(`${error.statusCode} : ${error.data.error.message}`);
  }, [error]);

  if (loading) return <Loading />;

  return (
    <div className="py-12 px-16 max-[992px]:px-12 max-[768px]:px-8 max-[600px]:px-4">
      <ProductList products={products} />
    </div>
  );
}
