import { Helmet } from "react-helmet"
import Cover from "../../Shared/Cover/Cover"

import menuImg from '../../assets/menu/banner3.jpg'
import PopulerItems from "../../Components/PopulerItems/PopulerItems"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} titel={'OUR MENU'} desc={'Would you like to try a dish?'} />
            <PopulerItems />
        </div>
    )
}

export default Menu