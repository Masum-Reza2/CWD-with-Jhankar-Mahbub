import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
// instead of Link when we use NavLink then 'active' class inserts automatically.

const Navbar = () => {
  return (
    <div style={{textAlign:'center'}}>
      <NavLink style={{marginRight:'10px'}} to='/about'>About</NavLink>
      <NavLink style={{marginRight:'10px'}} to='/services'>Services</NavLink>
      <NavLink style={{marginRight:'10px'}} to='/users'>Users</NavLink>
      <NavLink style={{marginRight:'10px'}} to='/posts'>Posts</NavLink>
      <NavLink style={{marginRight:'10px'}} to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar