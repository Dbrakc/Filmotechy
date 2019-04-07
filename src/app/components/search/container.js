import {connect} from 'react-redux'

import addToCollectionAction from '../../actions/my-collection/addToCollection';
import Search from './view';
import { fetchSearch } from '../../actions/search/fetchSearch';

const mapStateToProps = state => ({
    searchs: state ? state.searchs : [],
    myCollections: state ?  state.myCollections : [],
    
})

const mapDispatchToProps = (dispatch, props) => (
    {
        addToCollection: (item) =>{ 
            dispatch(addToCollectionAction(item))
            alert('To collection added')
        },
        fetchSearch: (query) => dispatch(fetchSearch(query))
    }
) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)