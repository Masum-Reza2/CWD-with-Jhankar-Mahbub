const SideBar = ({ navLinks }) => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {navLinks}
        </ul>
    )
}

export default SideBar