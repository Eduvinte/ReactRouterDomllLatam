import React, { useEffect, useState } from 'react'
import axios from 'axios'
// Use parametro nos permite amarnezar el valor enviado via parametro
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container';



function Personajes() {

  const { id } = useParams();

  const [data, setData] = useState({});

useEffect(() => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then(response => {
  setData(response.data)
})
.catch (error => {
  console.log(error)
})
}, [])


 
  return (
    <div id='container_personajes'>
     <div id='imgPersonaje' style={{backgroundImage: `url(${data.image})`, width: 250, height: 250, backgroundSize: 'conver'}}></div> 
     <h1>{data.name}</h1>
    </div>
  )
}

export default Personajes