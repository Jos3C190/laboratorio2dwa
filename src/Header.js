import React from 'react';
import './Header.css';

/* 
  Este es un componente funcional en React llamado Header.
  Los componentes en React permiten dividir la interfaz de usuario 
  en piezas reutilizables e independientes. Los componentes pueden ser 
  de tipo funcional (como este) o de clase. 

  En este caso, Header es un componente simple que muestra 
  un encabezado y un párrafo. Al dividir la interfaz en componentes, 
  podemos reutilizar y mantener el código de manera más sencilla.
*/

function Header() {
    return (
        <header>
          <h1>LABORATORIO 2 - DISEÑO WEB ADAPTABLE</h1>
          <p>Hello World!</p>
          <p>José Carlos López Martínez U20220643</p>
        </header>
    );
}

export default Header;
