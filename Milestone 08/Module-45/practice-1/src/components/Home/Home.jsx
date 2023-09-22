import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();

    console.log(location)
    return (
        <div style={{ textAlign: 'center' }}>
            <Navbar />
            <h1>Welcome to home</h1>
            {
                navigation.state === "loading" ? 'Loading...' : <Outlet />
            }   
            <Footer />
        </div>
    )
}

export default Home