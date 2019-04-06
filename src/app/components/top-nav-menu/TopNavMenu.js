import React from 'react';
import { NavLink } from 'react-router-dom'

import './TopNavMenu.css'

import {routes} from '../Router'


const TopNavMenu = props =>
    <nav className = 'nav'>
        <ul className = 'nav-list'>
            <li className = 'nav-list-item' >
                <NavLink
                    className = 'nav-list-item-navLink'
                    exact
                    to={routes.popular()}>
                    Popular    
                </NavLink>
            </li>
            <li className = 'nav-list-item'>
                <NavLink
                    className = 'nav-list-item-navLink'
                    exact
                    to={routes.search()}>
                    Search    
                </NavLink>
            </li>
            <li className = 'nav-list-item'>
                <NavLink
                    className = 'nav-list-item-navLink'
                    exact
                    to={routes.myCollection()}>
                    My Collection    
                </NavLink>
            </li>
        </ul>
    </nav>

export default TopNavMenu