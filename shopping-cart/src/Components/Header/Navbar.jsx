import { ImHeart, ImSearch } from "react-icons/im"
import "./Header.css"
import { LuHeart } from "react-icons/lu"
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
                <div className="add-to-cart-details">
                        <LuHeart/>
                        
                        
                </div>
            </div>
        </nav>
    )
}