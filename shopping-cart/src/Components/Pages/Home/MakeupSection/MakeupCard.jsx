import { FaBasketShopping } from "react-icons/fa6"
import { LuHeart } from "react-icons/lu"
import "../Ui/CardStyling.css"

export const MakeupCard = ({curdata}) => {

    return (
        <li className="home-card-item" key={curdata.id}>
              <img src={curdata.api_featured_image} alt={curdata.image_link} loading="lazy" />
              <div className="home-card-item-details">
                <h4 className="home-card-item-title" style={{ textAlign: "center" }}>{curdata.name} by {curdata.brand}</h4>
                <p className = "card-price">
                  {curdata.price}$ <del>10.0$</del>
                </p>
              </div>
              <div className="add-to-cart flex-row">
                <span className="add-to-cart-icon-1">
                  <FaBasketShopping />
                </span>
                <span className="product-add-to-cart-details">Add to Cart</span>
                <span className="add-to-cart-icon-2">
                  <LuHeart />
                </span>
              </div>
            </li>
    )
}