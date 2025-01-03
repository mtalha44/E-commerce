import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { ScrollContextProvider } from "../Header/ScrollContext/ScrollContextNav"
export const AppLayout = () => {

    return (
        <>
            <ScrollContextProvider>
                <Header/>
                <Outlet/>
            </ScrollContextProvider>
        </>
    )
}