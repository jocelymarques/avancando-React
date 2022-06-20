import React from 'react'

const ShowUserName = (props) => {
    return (
        <div>
            <h1>Props</h1>
            O nome é: {props.name}
            <hr />
        </div>
    )
}

export default ShowUserName