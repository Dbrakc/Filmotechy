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
                        actionIcon= 'https://img.icons8.com/ultraviolet/40/000000/delete.png'
                        actionClick={props.deleteFromCollection}
                    /> 
            }
            /> 
        </>
    )
}

export default MyCollection