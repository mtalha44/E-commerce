import { useEffect } from "react"
import { Clothes } from "./ClotheSection/Clothes"
import { Electronics } from "./Electronics/Electronics"
import "./Home.css"
import { Jewlery } from "./JewlerySection/Jewlery"
import { Makeup } from "./MakeupSection/Makeup"
import { ProductCategories } from "./ProductCategories/ProductCategories"
import { ImageSlider } from "./SlideGallery/SlideGallery"
export const Home = () => {
       const handle = async () =>{
        try{
            let url = "https://dummyjson.com/products/category/furniture";
            let response = await fetch(url);
            if(!response.ok){
                throw new Error(`Error occurred: ${response.status}`);
            }
            let data = await response.json();
            console.log(data);            
        } catch(error){
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        handle();
      }, []);
    
   return (
   <section className="home" id="home">
            
        <div className="add-promotion-section">
            <div className="slide-img-gallery">
                <ImageSlider/>
            </div>
            <div className="side-banner">
                <div className="side-banner-img">
                   <a href="">
                     <img src="./images/small-slider-banner-1.jpg" alt="" />
                    </a>
                </div>
                <div className="side-banner-img">
                   <a href="">
                     <img src="./images/small-slider-banner-2.jpg" alt="" />
                    </a>
                </div>
                <div className="side-banner-img">
                   <a href="">
                     <img src="./images/small-slider-banner-3.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>

        <div className="stock-section flex-row">
            <a href=""><img src="/images/StockSnap_img.jpg" alt="" /></a>
        </div>

        <div className="product-categories-container">
            <ProductCategories/>
        </div>
        <div className="makeup-stocks">
            <Makeup/>
        </div>
        <div className="jewlery-stocks">
            {/* <Jewlery/> */}
        </div>
        <div className="clothes-stocks">
            <Clothes/>
        </div>
        <div className="electronics-stocks">
            <Electronics/>
        </div>
    </section>
    )
}