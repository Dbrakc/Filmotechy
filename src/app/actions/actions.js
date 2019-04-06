
export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';

const addToCollectionAction = (movie) => (
    {
        type: ADD_TO_COLLECTION,
        payload:{
            movie: movie
        }
    }
)



export default addToCollectionAction;
