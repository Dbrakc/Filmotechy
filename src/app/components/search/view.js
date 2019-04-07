import React, {useState, useEffect} from 'react';

import './styles.css'

import MovieList from './../movie-list/MovieList'
import MovieResume from '../movie-resume/view'


const Search = props => {
    let [,forceUpdate] = useState();
    const changeSearchQuery = (event) => {
        const query = event.target.value
        props.fetchSearch(query)
        forceUpdate()
    }
    return(
        <> 
            <input type='search' onChange={changeSearchQuery}/>
            { 
                props.searchs.data 
                && 
                props.searchs.data.length>0
                &&
                <MovieList 
                    movies = {props.searchs.data} 
                    render = { (movie)=> 
                        <MovieResume 
                            item= {movie} 
                            actionClick={props.addToCollection}
                        /> 
                    }
                /> 
                
            }
        </>
    )
}



export default Search