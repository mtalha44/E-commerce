import { useEffect, useState } from "react";
import "../Ui/CardStyling.css"
import { useScroll } from "../Ui/ScrollFunctionality";
import { useNavigate } from "react-router-dom";
import { BestProductCard } from "./BestProductCard";
import { dummyProductData } from "../../../Products/DummyProduct/DummyProductData";

export const BestProducts = () => {
    const { scrollContainerRef, scroll } = useScroll();
    const [ bestProductData , setBestProductData ] = useState([]);
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);
    const navigate = useNavigate();  

    //  const data = dummyProductData.products;
    // //  console.log(bestProductData);
    //  const bestProductData = data.filter( products => products.category=== 'smartphones');
    //  console.log(bestProductData[0].title);
    //  console.log(bestProductData[0].id);
    //  console.log(bestProductData[0]);

    const handle = async () => {
      try{
          // let url = 'https://dummyjson.com/carts';
          // let url = 'https://dummyjson.com/products';
          let url = 'https://api.escuelajs.co/api/v1/products';

          let response = await fetch(url);
          if(!response.ok){
              throw new Error(`Error occurred: ${response.status}`);
          }
          let data = await response.json();
          // console.log(data.carts[1].products);
          // setBestProductData(data.carts[1].products);
          console.log(data)
          const filteredProducts = data.filter( products => products.category.name === "Electronics" );
          console.log(filteredProducts);
          setBestProductData(filteredProducts);
          setLoading(false);
      }catch(error){
          console.error("Error fetching data:", error);
          setError(error);
      }
  }
  useEffect(() => {
      handle();
  },[])

  return (
    <section className="home-card-container flex-column" id="clothes">
      <div className="home-card-title-container flex-column">
        <h1 className="home-card-title">Best Selling Products</h1>
        <p className="home-card-subtitle">Discover the Latest in Tech Innovation</p>
      </div>
      <div className="scroll-btn-container">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          &lt;
        </button>
        <button className="scroll-button right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>

      {
              loading ? (
                <div className="skeleton-container">
                  {Array(5).fill(0).map((_, index) => (
              <div key={index} className="skeleton-card"></div>
            ))}
              </div>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
            <ul className="home-card-list" ref={scrollContainerRef}>
              {bestProductData && bestProductData.length > 0 ? (
                bestProductData.map((curdata) => (
                  <BestProductCard key={curdata.id} curdata={curdata}/>
                ))
              ) : (
                <p>No clothes found.</p>
              )}
            </ul>
              )
      }
        
      <div className="wrapper see-more" onClick={() => navigate("/makeup_products")}>
        <div className="link_wrapper">
          <a href="#">See more</a>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};