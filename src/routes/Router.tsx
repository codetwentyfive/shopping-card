import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App />, errorElement: <ErrorPage /> },
    { path: "home", element: <Home /> },
    { path: "products", element: <Products /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
