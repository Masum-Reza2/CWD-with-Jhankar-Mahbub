import { Link, Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Link to={'/phones'}> phones</Link>
            <Outlet />
        </div>
    )
}

export default Root