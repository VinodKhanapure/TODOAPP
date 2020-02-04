import React from 'react'

const Item = (props) => {

    const items = props.items.map((item, index) => {
        return (

            <ul key={index}>
                <li>{item}</li>
            </ul>)

    })
    return (
        <div>
            <h1>TODO</h1>
            {items}
        </div>
    )
}

export default Item