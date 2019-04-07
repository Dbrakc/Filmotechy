import{ FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS} from './../../action-types/search/fetchSearch'
import API_KEY from './../../constants'


export const fetchSearchRequestAction = searchQuery => ({
    type: FETCH_SEARCH_REQUEST,
    payload:{
        search: searchQuery
    }
});

export const fetchSearchSuccessAction = (searchQuery,json) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: {
        popular: json.results,
    }
});

export const fetchSearch =  (searchQuery) =>  (dispatch)  => {
    dispatch(fetchSearchRequestAction())  
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`)
    .then(
         response => response.json(),
         error => console.log('An error occurred.', error),
     )
      .then((json) => {
         dispatch(fetchSearchSuccessAction(searchQuery,json));
      },
     );
};