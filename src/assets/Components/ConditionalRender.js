import React from 'react'
import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState()

    const [name, setName] = useState('marcos')


  return (
    <>
        <h1>If ternário</h1>
        <h4>Isso será exibido?</h4>
        {x && <p>Se x for true, sim</p>}
        {!x && <p>Agora x é Falso</p>}

        {name === 'joão' ? (

            <div>
                <p>O nome é João, sim</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}

        <button onClick={() => setName("joão")}>Definir nome</button>
        <hr />

    </>
  )
}

export default ConditionalRender