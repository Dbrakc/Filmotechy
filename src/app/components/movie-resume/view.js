import React from 'react'
import './styles.css'


const MovieResume = (props) =>
    <>
        <img
            className = 'posterImage'
            src= {`https://image.tmdb.org/t/p/w500${props.item.poster_path}`}
            alt = 'item promotional poster'
        />
        <div className= 'propertiesContainer'>
            <h4 className = 'title'>{props.item.title}</h4>
            <div className = 'favoritesIconWrapper'>
                <img 
                    className = 'favoritesIcon'
                    onClick = {() => props.actionClick(props.item)}
                    src= {props.actionIcon?props.actionIcon:"https://img.icons8.com/ultraviolet/40/000000/like.png"}
                    alt = 'Add to your collection'
                />
            </div>
        </div>
        <div className= 'propertiesContainer'>
            <p className = 'vote_count' >{props.item.vote_count}</p>
            <p className = 'year'>{props.item.release_date}</p> 
        </div>
    </>

export default MovieResume