import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';


function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png"); //convierte a imagen
      var link = document.createElement('a'); //crea un elemento tipo a
      link.download = 'meme.png'; // le asigna un nombre al archivo descargado
      link.href = img; //genera un link en htlm y toda esa url apunta a la imagen a descargar
      link.click();
    });
  }

  return (
    <div className="App">
      <h1 className="title">Bienvenidos al generador de memes</h1>
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>{/*  */}
        <option value="smart">Smart Guy</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" /> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}


export default App;
