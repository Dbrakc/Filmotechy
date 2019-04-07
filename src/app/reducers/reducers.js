import  ADD_TO_COLLECTION from './../action-types/addToCollection'
import  DELETE_FROM_COLLECTION from './../action-types/deleteFromCollection'
import FETCH_COLLECTION from './../action-types/FetchCollection'

const myCollections = (state = [], action) =>{
    
    switch (action.type){
        case ADD_TO_COLLECTION:
        console.log(isAllreadyNotSaved(state,action))
            return isAllreadyNotSaved(state, action)
            ? [...state, action.payload.movie]
            : state
        case DELETE_FROM_COLLECTION:
            return state.filter(movie => movie.id !== action.payload.id)      
        case FETCH_COLLECTION:
            return [...action.payload.collection]
        default:
            return state
    }
}

function isAllreadyNotSaved(state, action) {
    return state.length === 0 ||
        state.filter(movie => movie.id === action.payload.movie.id).length === 0;
}

export default myCollections;


