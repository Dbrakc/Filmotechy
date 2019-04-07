import {connect} from 'react-redux'

import addToCollectionAction from '../../actions/my-collection/addToCollection';
import Popular from './view';
import { fetchPopular } from '../../actions/popular/fetchPopular';

const mapStateToProps = state => ({
    populars: state ? state.populars: [],
    myCollections: state ?  state.myCollections : [],
})

const mapDispatchToProps = (dispatch, props) => (
    {
        addToCollection: (item) =>{ 
            dispatch(addToCollectionAction(item))
            alert('To collection added')
        },

        fetchPopular: () => dispatch(fetchPopular())
    }
) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popular)