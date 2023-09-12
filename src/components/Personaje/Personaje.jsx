import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetPersonajeId } from '../../api';

// Componente para mostrar detalles de un personaje
export const Personaje = () => {
  const { id } = useParams(); // Obtener el parámetro de ruta ":id"
  const [Personaje, setPersonaje] = useState({}); // Estado para almacenar los detalles del personaje

  // Función para obtener los detalles del personaje
  const fetchData = async () => {
    try {
      const data = await GetPersonajeId(id);
      setPersonaje(data);
    } catch (error) {
      console.error('Error al obtener los personajes', error);
    }
  };

  // Llamar a fetchData al montar el componente y cuando el ID cambie
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {/* Mostrar detalles del personaje */}
      <img src={Personaje.image} alt=""></img>
      <p>{Personaje.name}</p>
      <p>{Personaje.status}</p>
      <p>{Personaje.species}</p>
      <p>{Personaje.gender}</p>
      {/* Enlace para volver a la página principal */}
      <Link to={"/personajes"}> Volver </Link>
    </div>
  );
}