import {connect} from 'react-redux'

import Filmotechy from './view';
import loadState from './../../local-storage/loadState';

import fetchCollection from './../../actions/fetchCollection'

const mapStateToProps = state => (
    {
        collection: state
    }
)

const mapDispatchToProps = (dispatch, props) =>{ 
    return (
    {
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
)(Filmotechy)