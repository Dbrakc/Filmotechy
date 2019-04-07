import  ADD_TO_COLLECTION from './../action-types/addToCollection'
import FETCH_COLLECTION from './../action-types/FetchCollection'

const myCollections = (state = [], action) =>{
    switch (action.type){
        case ADD_TO_COLLECTION:
            return [...state, action.payload.movie]
        case FETCH_COLLECTION:
            return [...action.payload.collection]
        default:
            return state
    }
}

export default myCollections;
