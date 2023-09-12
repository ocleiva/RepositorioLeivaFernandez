import "./Login.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componente de inicio de sesión
export default function Login() {
  // Estados para almacenar el nombre, contraseña y errores
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Función que se llama al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || contraseña === "") {
      setError(!error);
      return;
    }
    // Redirigir a la página principal si los campos están completos
    navigate("/personajes");
  };

  return (
    <div className="fondo">
      <section>
        <h1>Login</h1>
        <form className="Login" onSubmit={handleSubmit}>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button> Iniciar sesión</button>
        </form>
        {error && <p>Todos los campos son obligatorios</p>}
      </section>
    </div>
  );
}