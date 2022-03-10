import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {NavBarData} from "./NavBarData";
import "./NavBar.css";


const NavBar = () => {
    // eslint-disable-next-line
    const [links, setLinks] = useState(NavBarData)
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo"><h3>Logo</h3></div>
                    <ul className="nav-items">
                        {links.map(({id, title, url}) => {
                            return (
                                <li key={id} className="nav-item">
                                    <Link to={url} claseName="nav-lick">{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>


    );
};

export default NavBar;