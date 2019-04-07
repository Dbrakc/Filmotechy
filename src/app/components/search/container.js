import {connect} from 'react-redux'

import addToCollectionAction from '../../actions/addToCollection';
import Search from './view';

const mapStateToProps = state => ({output: true})

const mapDispatchToProps = (dispatch, props) => (
    {
        addToCollection: (item) => dispatch(addToCollectionAction(item))
    }
) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)