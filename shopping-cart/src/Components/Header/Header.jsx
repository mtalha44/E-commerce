import { Navbar } from "./Navbar"
import { NavPages } from "./NavPages"
import { Social } from "./SocialLinks"


export const Header = () => {

    return (
        <div className="header" id="header">
            <div className="social">
                <Social/>
            </div>
            <div className="navbar">
                <Navbar/>
            </div>
            <div>
                <NavPages/>
            </div>
        </div>
    )
}