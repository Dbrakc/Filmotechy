import ADD_TO_COLLECTION from './../action-types/addToCollection'

const addToCollectionAction = (movie) => (
    {
        type: ADD_TO_COLLECTION,
        payload: { movie }
    }
)

export default addToCollectionAction



