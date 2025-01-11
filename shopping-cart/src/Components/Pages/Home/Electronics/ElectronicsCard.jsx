import { FaBasketShopping } from "react-icons/fa6"
import { LuHeart } from "react-icons/lu"
import "../Ui/CardStyling.css"

export const ElectronicsCard = ({curdata}) => {

    return (
        <li className="home-card-item" key={curdata.id}>
              <img src={curdata.images[0]} alt={curdata.images[1]} loading="lazy" />
              <div className="home-card-item-details">
                <h4 className="home-card-item-title" style={{ textAlign: "center" }}>{curdata.title}</h4>
                <p style={{ textAlign: "center" }}>
                  {curdata.price}$ <del>100.0$</del>
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