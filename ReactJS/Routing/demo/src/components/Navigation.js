import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
    const setStyle = ({ isActive }) => {
        return isActive
            ? styles['active-link']
            : undefined
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={setStyle}>Home</NavLink></li>
                <li><NavLink to="/about" className={setStyle}>About</NavLink></li>
                <li><NavLink to="/contacts" className={setStyle}>Contacts</NavLink></li>
                <li><NavLink to="/pricing" className={setStyle}>Pricing</NavLink></li>

                <li>
                    <NavLink
                        to='/products/2'
                        // style={({ isActive }) => ({
                        //     backgroundColor: isActive ? 'lightblue' : 'grey'
                        // })}
                        className={setStyle}
                    >
                        Products
                    </NavLink>
                </li>

                <li><NavLink to='/mill-falcon' className={setStyle}>Millenium Falcon</NavLink></li>
                <li><NavLink to="/pricing/contacts" className={setStyle}>Contacts Pricing</NavLink></li>
            </ul>
        </nav>
    );
}