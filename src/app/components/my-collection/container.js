import {connect} from 'react-redux'

import addToCollectionAction from '../../actions/actions';
import MyCollection from './view';

const mapStateToProps = state => ({output: true})

const mapDispatchToProps = (dispatch, props) => (
    {
        addToCollection: (item) => dispatch(addToCollectionAction(item))
    }
) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCollection)