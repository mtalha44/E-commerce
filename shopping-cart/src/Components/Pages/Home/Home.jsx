import { useEffect } from "react"
import { Clothes } from "./ClotheSection/Clothes"
import { Electronics } from "./Electronics/Electronics"
import "./Home.css"
import { Jewlery } from "./JewlerySection/Jewlery"
import { Makeup } from "./MakeupSection/Makeup"
import { ProductCategories } from "./ProductCategories/ProductCategories"
import { ImageSlider } from "./SlideGallery/SlideGallery"
import { BestProducts } from "./BestSellingProducts/BestProducts"
export const Home = () => {

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

        <div className="stock-section flex-row">
            <a href=""><img src="/images/sharp-car-wheel-stock-img.jpg" alt="" /></a>
        </div>

        <div className="best-selling-products-stocks">
            <BestProducts/>
        </div>
    </section>
    )
}


