import MenuItems from "../MenuItems/MenuItems"

/* eslint-disable react/prop-types */
const CategoryMenus = ({ data }) => {
    return (
        <div className="grid grid-cols-2 gap-5">
            {
                data?.map(item => <MenuItems key={item?._id} data={item} />)
            }
        </div>
    )
}

export default CategoryMenus