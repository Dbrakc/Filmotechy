import {connect} from 'react-redux'

import MovieExpanded from './view';
import { fetchMovieById } from '../../actions/movie/movieById';

const mapStateToProps = state => ({
    movie: state ? state.movie: []
})

const mapDispatchToProps = (dispatch, props) => (
    {
        fetchMovieById: (id) => dispatch(fetchMovieById(id))
    }
) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieExpanded)