import { useContext } from "react"
import { Navbar } from "./Navbar"
import { NavPages } from "./NavPages"
import { Social } from "./SocialLinks"
import { ScrollContext } from "../Header/ScrollContext/ScrollContextNav"
export const Header = () => {
  const hidescroll = useContext(ScrollContext);
  console.log(hidescroll);
    return (
        <div className={ hidescroll ? "header-toggle" : "header" } id="header">
            <div className={ hidescroll ? "gayab" : "social" }>
                <Social/>
            </div>
            <div className="navbar">
                <Navbar hidescroll = {hidescroll}/>
            </div>
            <div>
              <NavPages hidescroll= {hidescroll} />
            </div>
        </div>
    )
}