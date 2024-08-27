import { Link } from "react-router-dom";

export default function ProductList({ products, onClick }) {
  console.log(products);

  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
      {products
        .filter((product) => product.inventory.available > 0)
        .map((product) => (
          <div key={product.id}>
            <Link to={`/${product.id}/${product.name}`} onClick={onClick}>
              <img src={product.image.url} alt={product.name} />
              <div className="flex flex-col space-between py-4">
                <p className="font-semibold">{product.name}</p>
                <span>{product.price.formatted_with_code}</span>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
