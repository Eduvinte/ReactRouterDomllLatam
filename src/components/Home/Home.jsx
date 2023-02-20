import React, { useState } from 'react'
// Use Navigation nos permite pasar parametro por medio del url, en este caso estamos pasando un id por medio de un input y mandando via url
import { useNavigate } from 'react-router-dom'

function Home() {

  const [id, setId] = useState('')

  const navigate = useNavigate();

  const irApersonajes = () => {
    navigate(`/personajes/${id}`)
    console.log(id)
  }

  return (
    <>
    <div id='container_home'>
        <h1>Desafio latam React Router ll</h1>
        <input 
        id='input_home'
        type='number'
        value={id}
        onChange={({ target }) => setId(target.value)} />
         <button id='btn_home' onClick={ irApersonajes }>Buscar</button>
    </div>
    </>
  )
}

export default Home