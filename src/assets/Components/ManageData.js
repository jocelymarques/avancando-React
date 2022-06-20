import { useState } from 'react'
import React from 'react'


const ManageData = () => {

    const [number, setNumber] = useState(10);

    return (
    <div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar numero</button>
        </div>
        <hr />
    </div>
  )
}

export default ManageData