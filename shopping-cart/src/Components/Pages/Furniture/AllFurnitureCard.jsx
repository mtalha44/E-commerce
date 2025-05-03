import { FaBasketShopping } from "react-icons/fa6"
import { LuHeart } from "react-icons/lu"
import "../Home/Ui/CardStyling.css"
import "../Ui/styling.css"
import { useNavigate } from "react-router-dom";

export const AllFurnitureCards = ({curdata}) => {
    const navigate = useNavigate();
      
    return (
        <li 
            className="home-card-item product-card-item" key={curdata.id} >
              <img src={curdata.images[0]} alt={curdata.images[1] || curdata.images[3]} loading="lazy" onClick={() => navigate(`/detail-product/${curdata.id}`)}/>
              <div className="home-card-item-details product-card-item-details">
                <h4 className="home-card-item-title product-card-item-title" style={{ textAlign: "center" }}>
                  {curdata.title}
                </h4>
                <p className = "card-price product-card-price">
                  {curdata.price}$ <del>10.0$</del>
                </p>
              </div>
              <div className="add-to-cart product-add-to-cart flex-row">
                <span className="add-to-cart-icon-1 product-to-cart-icon-1">
                  <FaBasketShopping />
                </span>
                <span className="product-add-to-cart-details">Add to Cart</span>
                <span className="add-to-cart-icon-2 product-to-cart-icon-2">
                  <LuHeart />
                </span>
              </div>
            </li>
    )
}
