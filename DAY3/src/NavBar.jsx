import './App.css';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return <div className='nav'>
        <ul>
            <li className='main navItem'>
                <Link  className='navLink' to='/'>
                    Amazon Knockoff
                </Link>
            </li>
            <li className='navItem'>
                <Link  className='navLink' to='/'>
                    Home
                </Link>
            </li>
            <li className='navItem'>
                <Link className='navLink' to='/products' end='true'>
                    Products
                </Link>
            </li>
            <li className='navItem'>
                <Link  className='navLink' to='/about'>
                    About
                </Link>
            </li>
            <li className='navItem'>
                <Link  className='navLink' to='/favorites'>
                    Favorites
                </Link>
            </li>
            <li className='navItem'>
                <Link  className='navLink' to='/add'>
                    Add Product
                </Link>
            </li>
        </ul>
    </div>
}