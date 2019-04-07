import FETCH_COLLECTION from '../../action-types/my-collection/FetchCollection'

const fetchCollection = (collection) => ({
  type: FETCH_COLLECTION,
  payload: { collection }
});

export default fetchCollection

