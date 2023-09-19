import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            {/* instead of anchors always use Link */}
            {/* after installing react router we will able to use the Link */}
            <nav>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
        </div>
    )
}

export default Header
