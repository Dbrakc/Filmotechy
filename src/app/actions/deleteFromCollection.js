import DELETE_FROM_COLLECTION from './../action-types/deleteFromCollection'

const deleteFromCollectionAction = (id) => (
    {
        type: DELETE_FROM_COLLECTION,
        payload: { id }
    }
)

export default deleteFromCollectionAction