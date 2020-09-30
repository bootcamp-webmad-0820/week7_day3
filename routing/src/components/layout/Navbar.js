// components/Navbar.js

import React from 'react'

import { NavLink } from 'react-router-dom'

const navbar = () => {

    // Menú programático 

    // const menu = [
    //     { to: '/', name: 'Home' },
    //     { to: '/about', name: 'About' },
    //     { to: '/profile', name: 'Profile' },
    //     { to: '/whatever', name: 'Otro más' },
    // ]

    return (
        <nav>
            <ul>
                <li><NavLink to='/' exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>Home</NavLink></li>
                <li><NavLink to='/about' activeStyle={{ fontWeight: 'bold', color: 'red' }}>About</NavLink></li>
                <li><NavLink to='/profile' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Profile</NavLink></li>
                <li><NavLink to='/shop/winter/clothes/coats' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Route Params example</NavLink></li>
                <li><NavLink to='/search?name=Raul&age=35' activeStyle={{ fontWeight: 'bold', color: 'red' }}>Query Strings example</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar;
