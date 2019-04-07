import React from 'react'
import {Link} from 'react-router-dom';

import './styles.css'

import { routes } from './../Router'


const MovieResume = (props) =>
    <>
        <Link 
            className = 'link' 
            to={routes.movieExpanded(props.item.id)}
        >
            <img
                className = 'posterImage'
                src= {`https://image.tmdb.org/t/p/w500${props.item.poster_path}`}
                alt = 'item promotional poster'
            />
        </Link>

        <div className= 'propertiesContainer'>
            <h4 className = 'title'>{props.item.title}</h4>
            <div className = 'favoritesIconWrapper'>
                <img 
                    className = 'favoritesIcon'
                    onClick = {() => props.actionClick(props.item)}
                    src= {
                        props.actionIcon
                        ?props.actionIcon
                        :"https://img.icons8.com/ultraviolet/40/000000/like.png"
                    }
                    alt = 'Add to your collection'
                />
            </div>
        </div>

        <div className= 'propertiesContainer'>
            <div className = 'vote_count'>
                <img 
                    className = 'rate_image'
                    onClick = {props.actionVote && (() => props.actionVote(props.item))}
                    src={
                        props.voteIcon
                        ?props.voteIcon
                        :'https://img.icons8.com/ultraviolet/40/000000/good-quality.png'
                    }
                    alt= 'Rating'
                />
                <p 
                    className = 'vote_value'
                >
                    {props.item.vote_count}
                </p>
            </div>
            <p className = 'year'>{props.item.release_date}</p> 
        </div>
        
    </>

export default MovieResume