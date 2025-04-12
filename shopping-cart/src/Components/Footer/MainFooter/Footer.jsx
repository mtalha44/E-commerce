import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { FaCcAmex, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaSquarePhone } from "react-icons/fa6"
import "./Footer.css"
export const Footer = () => {

    return (
        <>
            <section className="footer">
               <div className="left-side">
                 <div className="footer-title flex-row">

                    <div className="footer-logo">
                     <img src="/Logo/site-logo-1.png" alt="" />
                    </div>
                       <h1>Shopping Store</h1>
                  </div>
                  <div className="footer-description">Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Debitis nisi ab aspernatur culpa ipsum. Eligendi recusandae at quo delectus lorem pixel bna.
                  </div>
                 </div>
               <div className="middle-card-side">
                <h1>We Accept</h1>
                <div className="cards">
                    <FaCcVisa  className="fa-cards"/>
                    <FaCcPaypal className="fa-cards"/>
                    <FaCcMastercard className="fa-cards"/>
                    <FaCcDiscover  className="fa-cards"/>
                    <FaCcJcb  className="fa-cards"/>
                    <FaCcStripe  className="fa-cards"/>
                    <FaCcAmex  className="fa-cards"/>
                    <FaCcAmex  className="fa-cards"/>
                    <FaCcDinersClub  className="fa-cards"/>
                </div>
               </div>
               <div className="middle-location-side">
                 <h1>Location</h1>
                 <div className="location-details">
                     <div className="location-details-items">
                        <FaLocationDot className="location-side-icon"/>
                        <div> 123 Main Street, City, Country</div>
                     </div>
                    <div className="location-details-items">            
                        <FaSquarePhone className="location-side-icon"/><div> (+92) 3055997241</div>
                    </div> 
                    <div className="location-details-items">
                        <BiLogoGmail className="location-side-icon"/>
                     <div> mt4458649@gmail.com</div>
                    </div>
                 </div>
               </div>
               <div className="right-side">
                 <h1>Download Our App</h1>
                 <div className="app-store flex-column">
                   <img src="/images/app-store.jpg" alt="" />
                   <img src="/images/play-store.jpg" alt="" />
                 </div>
               </div>
               
            </section>
        </>
    )
}