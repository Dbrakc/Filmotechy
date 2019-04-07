import {connect} from 'react-redux'

import addToCollectionAction from '../../actions/addToCollection';
import Popular from './view';

const mapStateToProps = state => ({
    collection: state
})

const mapDispatchToProps = (dispatch, props) => (
    {
        addToCollection: (item) => dispatch(addToCollectionAction(item))
    }
) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popular)