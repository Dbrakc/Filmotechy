import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'typeface-roboto';
import './styles.css'

import TopNavMenu from '../top-nav-menu/TopNavMenu'
import Router from '../Router'


const Filmotechy =  (props) =>
    <BrowserRouter className = 'browserRouter'>
        <>
            <TopNavMenu/>
            <Router/>
        </>
    </BrowserRouter>


export default Filmotechy

