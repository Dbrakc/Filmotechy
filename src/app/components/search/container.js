import {connect} from 'react-redux'

import addToCollectionAction from '../../actions/addToCollection';
import Search from './view';

const mapStateToProps = state => ({
    collection: state
})

const mapDispatchToProps = (dispatch, props) => (
    {
        addToCollection: (item) =>{ 
            dispatch(addToCollectionAction(item))
            alert('To collection added')
        }
    }
) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)