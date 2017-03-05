import React from 'react'
import { Link } from 'react-router'


const SideNav = () => {
    return (
        <div>
            <Link to='/'>
                Goto Home
            </Link>
            <Link disabled></Link>
        </div>
     );
} 

export default SideNav;