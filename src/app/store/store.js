import { createStore } from 'redux'

import myCollections from './../reducers/reducers'
import saveState from './../local-storage/localStorage'

const store = createStore(myCollections)

store.subscribe(() =>{
    console.log(store.getState())
    saveState({
      collections: store.getState() 
    })
})

export default store;