// import { useEffect, useState } from "react";

import { FaBasketShopping } from "react-icons/fa6"
import { LuHeart } from "react-icons/lu"

// export const Perfumes = () => {
//   const [perfumesData, setPerfumesData] = useState(null);
//   const [loadApi, setLoadApi] = useState(true);
//   const [errorApi, setErrorApi] = useState(null);

//   const handleApi = async () => {
//     try {
//       const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error(`Error occurred: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//       setPerfumesData(data.slice( 0 , 6));
//       setLoadApi(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setErrorApi(error.message); // Set the error message
//       setLoadApi(false); // Ensure loading stops
//     }
//   };

//   useEffect(() => {
//     handleApi();
//   }, []);

//   if (loadApi) {
//     return <h1>Loading...</h1>;
//   }

//   if (errorApi) {
//     return <p>Error: {errorApi} </p>;
//   }

//   return (
//     <section className="perfumes-container" id="perfumes-container">
//       <div className="perfumes-title">
//         <h1>Beauty and Fragrance</h1>
//       </div>
//       {perfumesData && perfumesData.length > 0 ? (
//         perfumesData.map((curdata) => (
//           <ul key={curdata.id}>
//             <li>
//               <img src={curdata.api_featured_image} alt={curdata.image_link} />
//               <h3>{curdata.name}</h3>
//               <p>Brand: {`${curdata.brand || "Unknown" }`}</p>
//               <p>Price: {`${curdata.price  ||  "5" }$`} <del>{curdata.price + "10.0" }</del> </p>
//             </li>
//           </ul>
//         ))
//       ) : (
//         <p>No perfumes found.</p>
//       )}
//     </section>
//   );
// };
import "./Perfumes.css"
import { useNavigate } from "react-router-dom"
export const Perfumes = () => {

  const navigate = useNavigate();

  return (
    <section className="makeup-container flex-column" id="makeup-container">
        <div className="makeup-title-container flex-column">
          <h1 className="makeup-title">Beauty and Makeup</h1>
          <p className="makeup-subtitle">Top branded makeup products</p>
        </div>

        <ul className="makeup-list">
          <li className="makeup-item flex-column">
            <img src="/images/small-slider-banner-1.jpg" alt="" />
            <h4>Pepugana Lipstick</h4>
            <p>5.0$ <del> 10.0$</del></p>
              <div className="add-to-cart flex-row">
                <span className="add-to-cart-icon-1">
                <FaBasketShopping/>
                </span>
                <span className="product-add-to-cart-details">
                  Add to Cart
                </span>
                <span className="add-to-cart-icon-2">
                <LuHeart/>
                </span>
              </div>
          </li>
          <li className="makeup-item flex-column">
            <img src="/images/small-slider-banner-1.jpg" alt="" />
            <h4>Pepugana Lipstick</h4>
            <p>5.0$ <del> 10.0$</del></p>
              <div className="add-to-cart flex-row">
                <span className="add-to-cart-icon-1">
                <FaBasketShopping/>
                </span>
                <span className="product-add-to-cart-details">
                  Add to Cart
                </span>
                <span className="add-to-cart-icon-2">
                <LuHeart/>
                </span>
              </div>
          </li>
          <li className="makeup-item flex-column">
            <img src="/images/small-slider-banner-1.jpg" alt="" />
            <h4>Pepugana Lipstick</h4>
            <p>5.0$ <del> 10.0$</del></p>
              <div className="add-to-cart flex-row">
                <span className="add-to-cart-icon-1">
                <FaBasketShopping/>
                </span>
                <span className="product-add-to-cart-details">
                  Add to Cart
                </span>
                <span className="add-to-cart-icon-2">
                <LuHeart/>
                </span>
              </div>
          </li>
          <li className="makeup-item flex-column">
            <img src="/images/small-slider-banner-1.jpg" alt="" />
            <h4>Pepugana Lipstick</h4>
            <p>5.0$ <del> 10.0$</del></p>
              <div className="add-to-cart flex-row">
                <span className="add-to-cart-icon-1">
                <FaBasketShopping/>
                </span>
                <span className="product-add-to-cart-details">
                  Add to Cart
                </span>
                <span className="add-to-cart-icon-2">
                <LuHeart/>
                </span>
              </div>
          </li>
          <li className="makeup-item flex-column">
            <img src="/images/small-slider-banner-1.jpg" alt="" />
            <h4>Pepugana Lipstick</h4>
            <p>5.0$ <del> 10.0$</del></p>
              <div className="add-to-cart flex-row">
                <span className="add-to-cart-icon-1">
                <FaBasketShopping/>
                </span>
                <span className="product-add-to-cart-details">
                  Add to Cart
                </span>
                <span className="add-to-cart-icon-2">
                <LuHeart/>
                </span>
              </div>
          </li>
          <li className="makeup-item flex-column">
            <img src="/images/small-slider-banner-1.jpg" alt="" />
            <h4>Pepugana Lipstick</h4>
            <p>5.0$ <del> 10.0$</del></p>
              <div className="add-to-cart flex-row">
                <span className="add-to-cart-icon-1">
                <FaBasketShopping/>
                </span>
                <span className="product-add-to-cart-details">
                  Add to Cart
                </span>
                <span className="add-to-cart-icon-2">
                <LuHeart/>
                </span>
              </div>
          </li>
        </ul>

          {/* <button onClick={() => navigate("/makeup_products")}>See more</button> */}

          <div class="wrapper see-more" onClick={() => navigate("/makeup_products")}>
            <div class="link_wrapper">
              <a href="#">See more</a>
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                </svg>
              </div>
            </div>

          </div>

  </section>
  )
}