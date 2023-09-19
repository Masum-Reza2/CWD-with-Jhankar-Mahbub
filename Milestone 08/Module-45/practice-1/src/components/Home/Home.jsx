import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <div style={{textAlign:'center'}}>
            <Navbar />
            <h1>Welcome to home</h1>
            <p>All about Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate obcaecati delectus labore accusamus. Nam sunt eaque facere, pariatur hic qui consequatur nemo fugiat vel esse ipsum, mollitia accusantiumFuga exercitationem explicabo labore quaerat non fugit sint neque, accusamus illo facere vero.</p>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home