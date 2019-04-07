import React from 'react';

import './styles.css'

import MovieList from '../movie-list/MovieList'
import MovieResume from '../movie-resume'

const MOVIES = [1,2,3,4,5,6,7,9].map(number =>
    ( 
        {
             id: `N ${number}`,
             image : 'https://i.pinimg.com/originals/42/ee/c8/42eec80906a3cb84f6f51d34d2647c6c.jpg',
             title : `title ${number}`,
             year : `201${number}`,
             genre: `genre ${number}`
         }
     )
 )


const Popular = props => 
    <>
        <MovieList 
            movies = {MOVIES} 
            render = { (movie)=> 
                <MovieResume 
                    item= {movie}
                    actionClick={props.addToCollection}
                /> 
            }
        /> 
    </>

export default Popular