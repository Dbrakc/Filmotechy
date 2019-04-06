import { ADD_TO_COLLECTION } from './../actions/actions'

const myCollections = (state = [], action) =>{
    switch (action.type){
        case ADD_TO_COLLECTION:
            return [...state, action.payload.movie]
        default:
            return state
    }
}

export default myCollections;
