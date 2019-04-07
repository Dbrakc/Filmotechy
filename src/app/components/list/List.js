import React from 'react'

import './List.css'


const List = props =>
    <ul className= 'movies'>
        {
            props.elements.map(element =>
                <li className = 'movies-item'
                    key= {element.id}>
                    {
                        props.render(element)
                    }
                </li>
            )
        }
    </ul>


List.defaultProps = {
    elements: [],
    render: () => null,
}

export default List
