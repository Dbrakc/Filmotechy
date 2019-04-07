import React from 'react'
import './styles.css'


const MovieResume = (props) =>
    <>
        <img
            src= {props.item.image}
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
            <p className = 'genre' >{props.item.genre}</p>
            <p className = 'year'>{props.item.year}</p> 
        </div>
    </>

export default MovieResume