import React from 'react'
import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Fulano", "Sicrano", "Coiso"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Fulano" },
    { id: 2, name: "Sicrano" },
    { id: 3, name: "Coiso" }
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUser) => {
      return prevUser.filter((user) => randomNumber !== user.id)

    })
  }



  return (
    <>
      <div>
        <p>Com index</p>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <div>
          <p>Com ID</p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={deleteRandom}>Delete Random</button>
    </>
  )
}

export default ListRender