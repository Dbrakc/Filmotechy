import{ FETCH_POPULAR_REQUEST, FETCH_POPULAR_SUCCESS} from './../../action-types/popular/fetchPopular'
import API_KEY from './../../constants'

export const fetchPopularRequestAction = () => ({
    type: FETCH_POPULAR_REQUEST,
});

export const fetchPopularSuccessAction = json => ({
    type: FETCH_POPULAR_SUCCESS,
    payload: {
        popular: json.results
    }
});

export const fetchPopular =  () =>  dispatch  => {
    dispatch(fetchPopularRequestAction())
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(
         response => response.json(),
         error => console.log('An error occurred.', error),
     )
      .then((json) => {
         dispatch(fetchPopularSuccessAction(json));
      },
     );
};