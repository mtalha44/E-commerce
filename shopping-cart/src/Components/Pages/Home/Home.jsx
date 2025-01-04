import "./Home.css"
import { ImageSlider } from "./SlideGallery"

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

        <div className="product-categories">
            <div className="product-categories-title">
                <h1>Product Categories</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

    </section>
    )
}