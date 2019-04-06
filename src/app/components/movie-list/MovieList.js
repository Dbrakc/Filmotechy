import React from 'react'

import './MovieList.css'


const MovieList = props =>
    <ul className= 'movies'>
        {
            props.movies.map(movie =>
                <li className = 'movies-item'
                    key= {movie.id}>
                    {
                        props.render(movie)
                    }
                </li>
            )
        }
    </ul>

MovieList.defaultProps = {
    movies: [],
    render: () => null,
}

export default MovieList
