import React from 'react'
import "./Tarjeta.css"
import { Link } from 'react-router-dom';

export default function Tarjeta({ Data }) {
    return (
      <div className='container'>
        <div className='Tarjeta'>
          {/* Mostrar el nombre del personaje */}
          <h2>{Data.name}</h2>
          {/* Mostrar la imagen del personaje */}
          <img src={Data.image} alt=""></img>
          {/* Enlace para ver detalles del personaje */}
          {/* Enlace para ver detalles del personaje */}
        <Link to={`/${Data.id}`}>Detalles</Link>
        </div>
      </div>
    );
  }