import { useLoaderData } from "react-router-dom";
import "./productCard.css";

const ProductCard = () => {
  const { product } = useLoaderData();
  return (
    <div className="cardContainer">
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating.rate}
      </p>
    </div>
  );
};

export default ProductCard;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderProduct = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return { product: data };
};
