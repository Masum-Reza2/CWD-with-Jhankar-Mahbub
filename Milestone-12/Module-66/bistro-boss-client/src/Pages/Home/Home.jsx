import Banner from "../../Components/Banner/Banner"
import Category from "../../Components/Category/Category"
import Featured from "../../Components/Featured/Featured"
import PopulerItems from "../../Components/PopulerItems/PopulerItems"
import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import Testimonials from "../../Components/Testimonials/Testimonials"

import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'} />
            <Category />
            <PopulerItems />
            <Featured />
            <Testimonials />
        </div>
    )
}

export default Home