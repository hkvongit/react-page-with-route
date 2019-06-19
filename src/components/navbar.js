import React from 'react';
import {Link} from 'react-router-dom'

const Navbar=()=>(
    <div className="nav">
        <h2 className="logo">React Js</h2>
        <ul className="nav-menu">
            <li>
                <Link className="nav-menu-link"to='/'>
                    Home
                </Link>
            </li>
        </ul>
    </div>
)
export default Navbar;