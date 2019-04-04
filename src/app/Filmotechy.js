import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto';

import './Filmotechy.css'

import TopNavMenu from './TopNavMenu'
import Router from './Router'


 const Filmotechy = () =>
    <BrowserRouter>
        <>
            <TopNavMenu/>
            <Router/>
        </>
    </BrowserRouter>

export default Filmotechy

