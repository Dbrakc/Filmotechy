import React from 'react'

import List from './../list/List'

const SelectCollection = props =>
    <div>
        <List
            elements= {props.elements}
            render = { (element) => 
                <h2
                    className='collectionName'
                    onClick = {props.handleCollectionClick}
                >{element.collectionName.toUpperCase()}
                </h2>
            }
        />
    </div>

export default SelectCollection