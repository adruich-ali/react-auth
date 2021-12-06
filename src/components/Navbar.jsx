import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/Avatr.jpg'

const Navbar = ({user}) => {
    return (
        <div className="navbar">
                <span className="logo"><Link className="link" to="/">Adruich</Link></span>
                {user ? (
                <ul className="list">
                <li className="listItem">
                    <img src={avatar} alt="avatar" className="avatar"/>
                </li>
                <li className="listItem">
                    Ali Adruich
                </li>
                <li className="listItem">
                    Logout
                </li>
            </ul>
                ) : (
                    <Link className="link" to="/Login">Login</Link>
                )}

        </div>
    )
}

export default Navbar
