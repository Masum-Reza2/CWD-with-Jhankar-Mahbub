import { useState } from "react";
import Link from "../Link/Link"

// react icons
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { GiSkullCrossedBones } from 'react-icons/gi';

const CustomNavbar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
    ]

    const [hamburger, setHamburger] = useState(true);

    return (
        <div>
            {/* hamburger here */}
            {
                hamburger ? <AiOutlineMenuUnfold className="text-4xl md:hidden" onClick={() => setHamburger(!hamburger)} /> : <GiSkullCrossedBones className="text-4xl md:hidden" onClick={() => setHamburger(!hamburger)} />
            }

            <ul className={`text-center md:flex bg-rose-700 text-white px-10 py-2 rounded-lg md:space-x-4 transition-all duration-1000 absolute md:static left-16 ${hamburger ? '-top-60' : 'top-10'}`}>
                {/* whenever working with css, always remember in mind about the responsiveness */}
                {
                    routes.map(route => <Link key={route.id} route={route} />)
                }
            </ul>
        </div>
    )
}

export default CustomNavbar