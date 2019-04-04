import React from 'react'

const MOVIES = [1,2,3,4,5,6,7,9].map(number =>
    ( 
        {
             id: `${number}`,
             image : 'https://i.pinimg.com/originals/42/ee/c8/42eec80906a3cb84f6f51d34d2647c6c.jpg',
             title : `title ${number}`,
             year : `201${number}`,
             genre: `genre ${number}`
         }
     )
 )


const MovieResume = props => 
<div>
    <img 
        src= {props.item.image}
        alt = 'Movie promotional poster'/>
    <h4>{props.item.title}</h4>
    <p>{props.item.year}</p>
    <p>{props.item.genre}</p>
</div>


const MovieList = props =>  
    MOVIES.map(movie=>
        <MovieResume key= {movie.id} item= {movie}/>
    )



export default MovieList
