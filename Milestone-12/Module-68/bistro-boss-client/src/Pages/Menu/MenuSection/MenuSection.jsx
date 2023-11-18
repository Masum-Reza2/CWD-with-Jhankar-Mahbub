import { Link } from "react-router-dom"
import CategoryMenus from "../../../Shared/CategoryMenus/CategoryMenus"
import Cover from "../../../Shared/Cover/Cover"

const MenuSection = ({ sectionData, img, title, desc }) => {
    return (
        <section>
            {/* desserts */}
            <Cover img={img} titel={title} desc={desc} />
            <div className="py-10">
                <CategoryMenus data={sectionData} />
            </div>
            <div className="text-center pb-5">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </section>
    )
}

export default MenuSection