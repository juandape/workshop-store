import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/root";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetail, { loaderProducts } from "../pages/ProductDetail";
import ProductCard, { loaderProduct } from "../components/ProductCard";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "productDetail",
        element: <ProductDetail />,
        loader: loaderProducts,
      },
      {
        path: "productDetail/:id",
        element: <ProductCard />,
        loader: loaderProduct,
      },
    ],
  },
]);

export default router;
