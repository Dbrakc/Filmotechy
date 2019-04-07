import React, {useEffect} from 'react';

import MovieList from '../movie-list/MovieList'
import MovieResume from '../movie-resume'


const Popular = props => {
    useEffect(() =>{props.fetchPopular()}, [])
    return (
            <MovieList 
                movies = {props.populars.data} 
                render = { (movie)=>     
                    <MovieResume 
                        item= {movie}
                        actionClick={props.addToCollection}
                        from='popular'
                    /> 
                
                }
            /> 
        
    )
}

export default Popular