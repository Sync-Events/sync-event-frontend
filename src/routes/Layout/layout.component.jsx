import Navbar from "../../components/Navbar/navbar.component"
import Footer from "../../components/Footer/footer.component"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout