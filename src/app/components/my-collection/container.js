import {connect} from 'react-redux'

import MyCollection from './view';
import loadState from './../../local-storage/loadState';
import fetchCollection from '../../actions/my-collection/fetchCollection'
import deleteFromCollectionAction from '../../actions/my-collection/deleteFromCollection'
import voteMovie from '../../actions/my-collection/voteMovie'

const mapStateToProps = state => (
    {
        collection: state
    }
)

const mapDispatchToProps = (dispatch, props) =>{ 
    return (
    {
        deleteFromCollection: (movie) =>{ 
            dispatch(deleteFromCollectionAction(movie.id))
            alert('From collection deleted')
        },
        fetchCollection: () =>  dispatch(
           fetchCollection(
                loadState()
                ? loadState().collections
                : []
            )
        ),
        voteMovie: (movie) =>{
            dispatch(voteMovie(movie.id))
        }
       
    }
) 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCollection)