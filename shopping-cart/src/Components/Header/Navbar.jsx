import {  ImSearch } from "react-icons/im"
import { FaBasketShopping } from "react-icons/fa6";

import "./Header.css"
import { LuHeart, LuShoppingCart } from "react-icons/lu"
export const Navbar = () => {

    return (
        <nav className="navbar-comp">
            <div className="navbar-left-tab">
                <div className="logo">
                    <img src="./Logo/site-logo-1.png" alt="" className="logo-img"/>
                </div>
                <div className="web-name">
                    <h1 className="web-name-title">Shopping Store</h1>
                    <p className="web-name-description">No.1 Ecommerce Store in the world</p>
                </div>
            </div>
            <div className="navbar-right-tab">
                <div className="search-input">
                    <input type="search" name="" id="search-products" placeholder="Search Products..."/>
                    <button type="submit" className="submit">
                        <ImSearch/>
                    </button>
                </div>
                <div className="right-tab-cart-details flex-row">
                        <span className="add-to-cart-details">
                            <div className="count-total-cart flex-column">0</div>
                              <a href="">
                                 <LuHeart/>
                            </a>
                        </span>
                        <span className="add-to-cart-details">
                        <div className="count-total-cart flex-column">0</div>
                               <a href="">
                                    <FaBasketShopping/>
                                </a>
                        </span>
                        <span className="cart-total-price">
                            <p> <b>Total</b> $0.00</p>
                        </span>

                        <span className="shopping-bag flex-column">
                            <a href="">
                            <LuShoppingCart/>
                            </a>
                        </span>

                </div>
            </div>
        </nav>
    )
}