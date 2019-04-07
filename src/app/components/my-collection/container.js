import {connect} from 'react-redux'

import MyCollection from './view';
import loadState from './../../local-storage/loadState';
import fetchCollection from '../../actions/my-collection/fetchCollection'
import deleteFromCollectionAction from '../../actions/my-collection/deleteFromCollection'

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
        )
       
    }
) 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCollection)