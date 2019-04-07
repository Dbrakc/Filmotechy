import React, {useEffect} from 'react'

import './styles.css'

const MovieExpanded = props => {
    useEffect( () => { props.fetchMovieById(props.movieId)},[])
    
    return (
        <div className = 'container'>

            <img
                className = 'posterImage'
                src= {`https://image.tmdb.org/t/p/w500${props.movie.data && props.movie.data.poster_path}`}
                alt = 'item promotional poster'
            />
            <div className='textContainer'>
                <h2 className = 'title'>{props.movie.data && props.movie.data.title}</h2>
                <p>{props.movie.data && props.movie.data.overview}</p>  
            </div>
        </div>
    )
}

export default MovieExpanded