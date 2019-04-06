import React from 'react'
import { Switch, Route } from 'react-router'

import Popular from './popular'
import Search from './search'
import MyCollection from './my-collection'

const Router = () =>
  <Switch>
    <Route exact path='/' component={Popular} />
    <Route exact path='/search' component={Search}/>
    <Route exact path='/collection' component={MyCollection} />
  </Switch>

export default Router

export const routes = {
    popular: () => '/',
    search: () => `/search`,
    myCollection: () => '/collection',
}