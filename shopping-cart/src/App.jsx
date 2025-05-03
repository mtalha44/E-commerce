import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./Components/AppLayout/Applayout";
import { Home } from "./Components/Pages/Home/Home";
import { AllMakeup } from "./Components/Pages/Makeup/AllMakeup";
import { AllFurniture } from "./Components/Pages/Furniture/AllFurniture";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home/>,
          // loader : makeupApi,
        },
        {
          path: "/popular_items",
          element: <h1>popular items</h1>,
        },
        {
          path: "/perfumes",
          element: <h1>perfumes</h1>,
          // loader : makeupApi,
        },
        {
          path: "/makeup",
          element: <AllMakeup/>,
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
          element: <AllFurniture/>,
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
