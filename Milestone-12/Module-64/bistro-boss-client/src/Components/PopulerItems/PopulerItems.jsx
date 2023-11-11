import { useEffect, useState } from "react"
import SectionTitle from "../SectionTitle/SectionTitle"
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopulerItems = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch(`./menu.json`)
            .then(res => res.json())
            .then(data => {
                const populerData = data?.filter(item => item?.category === 'popular');
                setMenus(populerData);
            })
    }, [])
    console.log(menus)
    return (
        <section className="pb-10">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'} />
            <div className="grid grid-cols-2 gap-5">
                {
                    menus?.map(item => <MenuItems key={item?._id} data={item} />)
                }
            </div>
        </section>
    )
}

export default PopulerItems