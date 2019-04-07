import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './../reducers/reducers'
import saveState from '../local-storage/saveState'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

store.subscribe(() =>{
    saveState({
      collections: store.getState().myCollections
    })
})

export default store;