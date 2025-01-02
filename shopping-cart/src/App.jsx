import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { AppLayout } from "./Components/AppLayout/Applayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <h1>Home Page</h1>,
        },
        {
          path: "/popular_items",
          element: <h1>popular items</h1>,
        },
        {
          path: "/perfumes",
          element: <h1>perfumes</h1>,
        },
        {
          path: "/shorts",
          element: <h1>shorts</h1>,
        },
        {
          path: "/mixed",
          element: <h1>mixed</h1>,
        },
        {
          path: "/watches",
          element: <h1>watches</h1>,
        },
        {
          path: "/furniture",
          element: <h1>furniture</h1>,
        },
        {
          path: "/sports",
          element: <h1>sports</h1>,
        },
        {
          path: "/shop",
          element: <h1>Shop</h1>,
        },
        {
          path: "/cart",
          element: <h1>cart</h1>,
        },
        {
          path: "/support-section",
          element: <h1>support-section</h1>,
        },
        {
          path: "/blog",
          element: <h1>Blog</h1>,
        },
        {
          path: "/contact",
          element: <h1 style={{height: "200vh" , backgroundColor: "blue" , marginTop : "5rem"}}>Contact Us</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
