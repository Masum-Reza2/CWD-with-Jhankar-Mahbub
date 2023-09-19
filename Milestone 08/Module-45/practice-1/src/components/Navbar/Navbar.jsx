import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Link style={{marginRight:'10px'}} to='/about'>About</Link>
      <Link style={{marginRight:'10px'}} to='/services'>Services</Link>
      <Link style={{marginRight:'10px'}} to='/users'>Users</Link>
      <Link style={{marginRight:'10px'}} to='/posts'>Posts</Link>
      <Link style={{marginRight:'10px'}} to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar