import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { ScrollContextProvider } from "../Header/ScrollContext/ScrollContextNav"
import { Deals } from "../Pages/Discount/Deals"
import ScrollToTop from "./ScrollToTop"
import { Footer } from "../Footer/MainFooter/footer"
import ScrollDirectionButtons from "../ScrollFunctionality/ScrollButton"
export const AppLayout = () => {

    return (
        <>
                <ScrollToTop/>
            <ScrollContextProvider>
                <Header/>
                <Deals/>
                <ScrollDirectionButtons/>
                <Outlet/>
                <Footer/>
            </ScrollContextProvider>
        </>
    )
}