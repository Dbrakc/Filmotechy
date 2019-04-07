import React from 'react'
import { Switch, Route } from 'react-router'

import Popular from './popular'
import Search from './search'
import MyCollection from './my-collection'
import MovieExpanded from './movie-expanded'

const Router = () =>
  <Switch>
    <Route exact path='/' component={Popular} />
    <Route exact path='/search' component={Search}/>
    <Route exact path='/collection' component={MyCollection} />
    <Route exact path='/movie/:movieId' render={props =>{
      return(<MovieExpanded movieId={props.match.params.movieId}/>)
    }
    } />
  </Switch>

export default Router

export const routes = {
    popular: () => '/',
    search: () => `/search`,
    myCollection: () => '/collection',
    movieExpanded: (movieId) =>`/movie/${movieId}`
}