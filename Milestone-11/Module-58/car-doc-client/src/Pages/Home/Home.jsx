import AboutUs from "../../Components/AboutUs/AboutUs"
import Banner from "../../Components/Banner/Banner"
import Services from "../../Components/Services/Services"
import Footer from "../../Components/Shared/Footer"

const Home = () => {
    return (
        <div className="py-3">
            <Banner />
            <AboutUs />
            <Services />
            <Footer />
        </div>
    )
}

export default Home