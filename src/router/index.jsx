import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from '../layout/root';
import AboutPage from '../pages/about/About';
import Home, { loaderProducts } from '../pages/home/Home';
import ProductCard, { loaderProduct } from '../components/productCard/ProductCard';
import NotFound from '../pages/notFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderProducts,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'product-card/:id',
        element: <ProductCard />,
        loader: loaderProduct,
      },
    ],
  },
]);

export default router;
