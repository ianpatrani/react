import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

  let peliculas = peliculasJson;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }


  const buscarPelicula = async () => {
    let url = 'https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%2@Peliculas/Proyecto%2@Terminado/src/peliculas.json';

    /*  let respuesta = await fetch(url, {
       "method": 'GET',
       "headers": {
         "Accept": 'application/json',
         "Content-Type": 'application/json'
       }
     });
     let json = respuesta.json();
     alert(json); */
  }

  buscarPelicula();

  /* https://cors-anywhere.herokuapp.com/ */

  /* var respuesta = fetch(url, {
    "method": 'GET',//peticion servidor
    "mode": 'no-cors', //evita errores de cors
    "headers": { //indica que procesamor json
      "Accept": 'application/json', //indica que aceptamos contenido tipo json
      "Content-Type": 'application/json',//el contenido va a ser application/json
      
    }
  });
  var json = respuesta.json();
  alert(json); */




  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();

  return (
    <PageWrapper>

      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;