import React,{useEffect} from 'react';

import MovieList from './../movie-list/MovieList'
import MovieResume from './../movie-resume'

const MyCollection = props => {
    useEffect(() => { props.fetchCollection() } )
    return (
        <>
            <MovieList 
                movies = {props.collection} 
                render = { (movie)=> 
                    <MovieResume 
                        item= {movie} 
                        actionClick={props.addToCollection}
                    /> 
            }
            /> 
        </>
    )
}

export default MyCollection