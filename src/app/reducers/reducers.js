import { combineReducers} from 'redux';

import  ADD_TO_COLLECTION from '../action-types/my-collection/addToCollection'
import  DELETE_FROM_COLLECTION from '../action-types/my-collection/deleteFromCollection'
import FETCH_COLLECTION from '../action-types/my-collection/FetchCollection'
import VOTE_MOVIE from '../action-types/my-collection/voteMovie'
import { FETCH_POPULAR_REQUEST, FETCH_POPULAR_SUCCESS} from '../action-types/popular/fetchPopular'
import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS} from '../action-types/search/fetchSearch'
import { FETCH_MOVIE_BY_ID_REQUEST, FETCH_MOVIE_BY_ID_SUCCESS} from '../action-types/movie/movieById'


const myCollections = (state = [], action) =>{  
    switch (action.type){
        case ADD_TO_COLLECTION:    
            return isAllreadyNotSaved(state, action)
            ? [...state, {...action.payload.movie,vote_count: 0}]
            : state
        case DELETE_FROM_COLLECTION:
            return state.filter(movie => movie.id !== action.payload.id)      
        case FETCH_COLLECTION:
            return [...action.payload.collection]
        case VOTE_MOVIE:
            return state.map(movie => 
                movie.id!==action.payload.id
                ?movie
                :{
                    ...movie, 
                    vote_count: movie.vote_count!==5
                        ?movie.vote_count+1
                        :0
                }
            )
        default:
            return state
    }
}

const populars = (state = [], action ) =>{
    switch(action.type){
        case FETCH_POPULAR_REQUEST:
            return {...state, loading:true}
        case FETCH_POPULAR_SUCCESS:
            return {...state, loading:false, data: action.payload.popular}
        default:
            return state;
    }
}

const searchs = (state = [], action ) =>{
    switch(action.type){
        case FETCH_SEARCH_REQUEST:
            return {...state, loading:true}
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state, 
                loading:false, 
                data: action.payload.popular, 
                query: action.payload.query
            }
        default:
            return state;
    }
}

const  movie = (state = [], action ) =>{
    
    switch(action.type){
        case FETCH_MOVIE_BY_ID_REQUEST:
            return {...state, loading:true}
        case FETCH_MOVIE_BY_ID_SUCCESS:
            return {...state, loading:false, data: action.payload.movie}
        default:
            return state;
    }
}


const rootReducer = combineReducers(
    {
        myCollections, 
        populars,
        searchs,
        movie
    }
)


const isAllreadyNotSaved= (state, action) => 
state.length === 0 ||
        state.filter(movie => movie.id === action.payload.movie.id).length === 0;

export default rootReducer;


