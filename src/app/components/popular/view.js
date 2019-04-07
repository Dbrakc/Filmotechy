import React, {useEffect,useState} from 'react';

import './styles.css'

import MovieList from '../movie-list/MovieList'
import MovieResume from '../movie-resume'
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';




const Popular = props => {
    
    useEffect(() =>{props.fetchPopular()}, [])
    return (
        <>
            <MovieList 
                movies = {props.populars.data} 
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

export default Popular