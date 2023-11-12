import { Helmet } from "react-helmet"
import Cover from "../../Shared/Cover/Cover"

import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import useMenus from "../../Hooks/useMenus"
import CategoryMenus from "../../Shared/CategoryMenus/CategoryMenus"

import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzatImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import { Link } from "react-router-dom"
import MenuSection from "./MenuSection/MenuSection"

const Menu = () => {
    const { menus } = useMenus();
    const desserts = menus?.filter(item => item?.category === 'dessert')
    const soup = menus?.filter(item => item?.category === 'soup')
    const salad = menus?.filter(item => item?.category === 'salad')
    const offered = menus?.filter(item => item?.category === 'offered')
    const pizza = menus?.filter(item => item?.category === 'pizza');


    const description = `Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <section>
                {/* main */}
                <Cover img={menuImg} titel={'OUR MENU'} desc={'Would you like to try a dish?'} />
                <SectionTitle subHeading={`---Don't miss---`} heading={`TODAY'S OFFER`} />
                <CategoryMenus data={offered} />
                <div className="text-center py-5">
                    <Link to={'/order/all'}>
                        <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </section>

            <MenuSection sectionData={desserts} img={dessertImg} title={`desserts`} desc={description} />
            <MenuSection sectionData={pizza} img={pizzatImg} title={`pizza`} desc={description} />
            <MenuSection sectionData={salad} img={saladImg} title={`salad`} desc={description} />
            <MenuSection sectionData={soup} img={soupImg} title={`soup`} desc={description} />

        </div>
    )
}

export default Menu