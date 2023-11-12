import SectionTitle from "../SectionTitle/SectionTitle";
import useMenus from "../../Hooks/useMenus";
import CategoryMenus from "../../Shared/CategoryMenus/CategoryMenus";

const PopulerItems = () => {
    const { menus } = useMenus();
    const populer = menus?.filter(item => item?.category === 'popular')

    // const [menus, setMenus] = useState([]);
    // useEffect(() => {
    //     fetch(`./menu.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const populerData = data?.filter(item => item?.category === 'popular');
    //             setMenus(populerData);
    //         })
    // }, [])

    return (
        <section className="pb-10">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'} />

            <CategoryMenus data={populer} />

            <div className="text-center pt-5">
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
        </section>
    )
}

export default PopulerItems