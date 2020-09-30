// components/Home.js

import React from 'react';

import { Link } from 'react-router-dom'


const home = () => {
    return (
        <div>
            <div>
                <h3>Welcome to my portfolio page! My name is</h3>
                <h1>Ana</h1>
                <p>and I'm Web Developer!</p>
                <Link to="/about">Visita mi bio!</Link>
            </div>
        </div>
    )
}

export default home;
