import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="space-x-5">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  )
}

export default Header