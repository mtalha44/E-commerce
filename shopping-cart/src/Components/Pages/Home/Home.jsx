import "./Home.css"
import { Perfumes } from "./Perfumes/Perfumes"
import { ProductCategories } from "./ProductCategories/ProductCategories"
import { ImageSlider } from "./SlideGallery/SlideGallery"
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
        <div className="stocks">
            <Perfumes/>
        </div>
    </section>
    )
}