import { NavLink } from 'react-router-dom'
import './Navigation.css';

export default function Navigation() {
    // alert("Navigation is loading!");

    // Instead of regular links
    // we need to use `<NavLink>` for navigation
    return <ul className="navigation">
        <li><NavLink exact to="/">Home page</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
        <li><NavLink to="/userlisting/users/list">USERS</NavLink></li>
        {/* <li><NavLink to="/asdadadasdasd">Error test</NavLink></li> */}
    </ul>;
}