import React from 'react';

import MovieList from './../movie-list/MovieList'
import MovieResume from './../movie-resume'

const MyCollection = props => 
    <>
        <MovieList 
            movies = {[]} 
            render = { (movie)=> 
                <MovieResume 
                    item= {movie} 
                    actionClick={props.addToCollection}
                /> 
        }
        /> 
    </>

export default MyCollection