import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'typeface-roboto';
import './Filmotechy.css'

import TopNavMenu from './top-nav-menu/TopNavMenu'
import Router from './Router'
import store from './../store/store'



const Filmotechy = () =>
    <Provider store = {store} >
        <BrowserRouter className = 'browserRouter'>
            <>
                <TopNavMenu/>
                <Router/>
            </>
        </BrowserRouter>
    </Provider>

export default Filmotechy

