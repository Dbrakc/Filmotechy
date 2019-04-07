import{ FETCH_MOVIE_BY_ID_REQUEST, FETCH_MOVIE_BY_ID_SUCCESS} from './../../action-types/movie/movieById'
import API_KEY from './../../constants'

export const fetchMovieByIdRequestAction = () => ({
    type: FETCH_MOVIE_BY_ID_REQUEST,
});

export const fetchMovieByIdSuccessAction = json => ({
    type: FETCH_MOVIE_BY_ID_SUCCESS,
    payload: {
        movie: json
    }
});

export const fetchMovieById =  (id) =>  dispatch  => {
    dispatch(fetchMovieByIdRequestAction())
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(
         response => response.json(),
         error => console.log('An error occurred.', error),
     )
      .then((json) => {
         dispatch(fetchMovieByIdSuccessAction(json));
      },
     );
};