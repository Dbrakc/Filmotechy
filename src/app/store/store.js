import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import myCollections from './../reducers/reducers'
import saveState from '../local-storage/saveState'

const store = createStore(
    myCollections,
    applyMiddleware(thunk)
)

store.subscribe(() =>{
    saveState({
      collections: store.getState()
    })
})

export default store;