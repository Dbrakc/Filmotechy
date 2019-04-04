import React from 'react';
import { NavLink } from 'react-router-dom'

import {routes} from './Router'

const TopNavMenu = props =>
    <nav>
        <ul>
            <li>
                <NavLink
                    exact
                    to={routes.popular()}>
                    Popular    
                </NavLink>
            </li>
            <li>
                <NavLink
                    exact
                    to={routes.search()}>
                    Search    
                </NavLink>
            </li>
            <li><NavLink
                    exact
                    to={routes.myCollection()}>
                    My Collection    
                </NavLink>
            </li>
        </ul>
    </nav>

export default TopNavMenu