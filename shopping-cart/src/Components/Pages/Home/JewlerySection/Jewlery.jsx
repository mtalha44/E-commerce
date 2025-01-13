import "../Ui/CardStyling.css"
// import { jewleryCardData } from "./JewleryCardData"
import { JewleryCard } from "./JewleryCard";
import { useScroll } from "../Ui/ScrollFunctionality";
import { useEffect } from "react";
export const Jewlery = () => {
   const { scrollContainerRef, scroll } = useScroll();
        const handle = async () =>{
           try{
               let url = "https://dummyjson.com/products/category/furniture";
               let response = await fetch(url);
               if(!response.ok){
                   throw new Error(`Error occurred: ${response.status}`);
               }
               let data = await response.json();
               // let filterData = data.carts;
               console.log(data);

           } catch(error){
               console.error("Error fetching data:", error);
           }
       }
       useEffect(() => {
           handle();
         }, []); 
  return (
    <section className="home-card-container flex-column" id="jwelry">
      <div className="home-card-title-container flex-column">
        <h1 className="home-card-title">Golden Elegance</h1>
        <p className="home-card-subtitle">Adorn Yourself with Timeless Beauty</p>
      </div>
      <div className="scroll-btn-container">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          &lt;
        </button>
        <button className="scroll-button right" onClick={() => scroll("right")}>
          &gt;
        </button>
      </div>
      <ul className="home-card-list" ref={scrollContainerRef}>
        {jewleryCardData && jewleryCardData.length > 0 ? (
          jewleryCardData.map((curdata) => (
            <JewleryCard key={curdata.id} curdata={curdata}/>
          ))
        ) : (
          <p>No home-card found.</p>
        )}
      </ul>
      <div className="wrapper see-more" onClick={() => navigate("/home-card_products")}>
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


    //    const handle = async () =>{
    //     try{
    //         // let url = "https://dummyjson.com/products/category/furniture";
    //         let url = "https://dummyjson.com/carts";
    //         let response = await fetch(url);
    //         if(!response.ok){
    //             throw new Error(`Error occurred: ${response.status}`);
    //         }
    //         let data = await response.json();
    //          let filterData = data.carts;
    //         console.log(data);            
    //         console.log(filterData);
    //         console.log(filterData[0].products);
    //         console.log(filterData[1].products);
    //         console.log(filterData[2].products);
    //     } catch(error){
    //         console.error("Error fetching data:", error);
    //     }
    // }
    // useEffect(() => {
    //     handle();
    //   }, []);