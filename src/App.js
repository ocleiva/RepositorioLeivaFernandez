
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import { Personaje } from './components/Personaje/Personaje';
import PersonajesContainer from './components/PersonajesContainer/PersonajesContainter'
function RoutesApp() {
  return (
    <div className="App">
       <NavBar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/personajes' element={<PersonajesContainer/>}/>
          <Route element={<Personaje />} path="/:id"/>
      </Routes>
    </div>
  );
}
function RouterWrapper(){
  return(
    <BrowserRouter>
    <RoutesApp/> 
    </BrowserRouter>
  )

}
export default RouterWrapper;
