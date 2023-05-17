import { Link, useLoaderData } from 'react-router-dom';
import React from 'react';
import './home.css';
import Clock from '../components/countdown/Countdown';

function HomePage() {
  const { products = [] } = useLoaderData();

  return (
    <div>
      <h1>WORKSHOP</h1>

      <div className="container">
        {products.map((item) => (
          <div className="container__product" key={item.id}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="container__product--name">{item.title}</div>
            {Clock !== null ? (
              <Link to={`/product-card/${item.id}`}>
                <Clock />
              </Link>
            ) : (
              <p>not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

export const loaderProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');

  const data = await response.json();

  return { products: data };
};
