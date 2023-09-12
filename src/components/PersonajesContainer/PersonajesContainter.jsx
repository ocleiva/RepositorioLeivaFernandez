
import React, { useEffect, useState }  from 'react'
import { GetPersonajes } from '../../api'
import Tarjeta from '../Tarjeta/Tarjeta';

export default function PersonajesContainer() {
  
const [personajes, setPersonajes ] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPersonajes();
        
        setPersonajes(data);
        
      } catch (error) {
        console.error('Error al obtener los personajes', error);
      }
    };

    fetchData();
    console.log("aca vemos los personajes",personajes)
  }, []);
  return (
    <div>
        {personajes.map((Personaje) => (
        <Tarjeta key={Personaje.id} Data={Personaje} />
      ))}
        
        </div>
  )
}