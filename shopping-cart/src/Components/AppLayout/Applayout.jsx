import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { ScrollContextProvider } from "../Header/ScrollContext/ScrollContextNav"
import { Deals } from "../Pages/Discount/Deals"
export const AppLayout = () => {

    return (
        <>
            <ScrollContextProvider>
                <Header/>
                <Deals/>
                <Outlet/>
            </ScrollContextProvider>
        </>
    )
}