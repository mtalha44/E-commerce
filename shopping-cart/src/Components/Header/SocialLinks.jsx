import { ImGit, ImGithub, ImGoogle, ImLinkedin2, ImLocation2, ImMenu, ImPhone, ImPinterest2, ImTwitch, ImWhatsapp } from "react-icons/im";
import { LuFacebook, LuGitlab, LuInstagram, LuMenu, LuTwitter } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";

import "./Header.css"
import { useState } from "react";
export const Social = () => {
          const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };
    return (
        <div className="social-tab">

            <div className="left-social-tab">
               <a href=""><ImLocation2 /> Abc, Washington Lahore Pakistan</a>
               <a href=""><ImPhone /> +92 3055997241</a>
               <a href=""><ImGoogle/> support@gmail.com</a>
            </div>
            <div className="flex-row right-social-tab">

             <div className="social-icons flex-row">
                <a href="" className="fac-icon"><LuFacebook /></a>
                <a href="" className="git-icon"><ImGit/></a>
                <a href="" className="glab-icon"><LuGitlab/></a>
                <a href="" className="msg-icon"><LuMessageCircle /></a>
                <a href="" className="twitt-icon"><LuTwitter/></a>
                <a href="" className="twit-icon"><ImTwitch/></a>
                <a href="" className="pin-icon"><ImPinterest2/></a>
                <a href="" className="wats-icon"><ImWhatsapp/></a>
                <a href="" className="linkh-icon"><ImLinkedin2/></a>
                <a href="" className="goog-icon"><ImGoogle /></a>
                <a href="" className="gith-icon"><ImGithub/></a>
                <a href="" className="inst-icon"><LuInstagram/></a>
             </div>

            <div className="social-account flex-row">
                <a href="" className="my-account">My Account</a>
                <a href="" className="login">Login</a>
                <div className="menu-icon" onClick={toggleMenu}>
                    <LuMenu/>
                 </div>
            </div>
            </div>
                <div>

                 { menuOpen && (
                     <ul className="menu">
                     <li>
                       <a href="#my-account">My Account</a>
                     </li>
                     <li>
                        <hr />
                     </li>
                     <li>
                       <a href="#login">Login</a>
                     </li>
                   </ul>
                 )
                }
                </div>
        </div>
    )       
}