
# Laboratorio II - Guía Básica de React

José Carlos López Martínez U20220643



El propósito de esta evaluación es que desarrollen sus habilidades en React a partir de los conceptos básicos que cubre la guía. Se espera que apliquen lo aprendido en un pequeño proyecto práctico. 


## Instalación de React y Creación del Proyecto

- Instalar Node.js:
https://nodejs.org/en/download/prebuilt-installer

- Entra en el directorio donde se creara el proyecto:
```bash
  cd mis-proyectos-react
```

- Abre una terminal y ejecuta el siguiente comando para crear un nuevo proyecto:
```bash
  npx create-react-app laboratorio2dwa
```

- Entra en el directorio del proyecto:
```bash
  cd laboratorio2dwa
```

- Inicia el servidor de desarrollo:
```bash
  npm start
```





## Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para ejecutar el proyecto localmente en tu entorno de desarrollo:

#### Clona el Repositorio
- Clona el proyecto a tu máquina local. Abre una terminal y ejecuta:
``` bash
git clone https://github.com/Jos3C190/laboratorio2dwa.git
```
- Cambia al directorio del proyecto:
``` bash
cd laboratorio2dwa
```

#### Instala las Dependencias
- Asegúrate de tener Node.js instalado en tu sistema.
- Ejecuta el siguiente comando para instalar todas las dependencias necesarias del proyecto:
``` bash
npm install
```

#### Ejecuta el Servidor de Desarrollo
- Para iniciar el proyecto, ejecuta el siguiente comando:
``` bash
npm start
```
- Esto abrirá el proyecto en tu navegador predeterminado



## JSX vs HTML
JSX es una extensión de JavaScript que permite escribir código similar a HTML directamente dentro de nuestros archivos JavaScript. Aunque JSX se parece mucho a HTML, existen algunas diferencias:
- Atributos: En JSX, utilizamos `className` en lugar de `class` para definir clases CSS, ya que class es una palabra reservada en JavaScript. De igual forma, `for` se reemplaza por `htmlFor` en etiquetas de `<label>`.
- Expresiones JavaScript: JSX permite incluir expresiones JavaScript dentro de `{ }`.
- Prevención de Inyecciones de Código: JSX es seguro contra inyecciones de código, ya que escapa automáticamente los valores insertados.

## Props en React
Las props permiten pasar datos de un componente padre a un componente hijo. A continuación, un ejemplo que muestra datos de automóviles:
``` js
import React from 'react';

function CardAutomovil({ marca, modelo, anno, color }) {
  return (
    <div className="card-automovil" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Información del Automóvil</h3>
      <p><strong>Marca:</strong> {marca}</p>
      <p><strong>Modelo:</strong> {modelo}</p>
      <p><strong>Año:</strong> {anno}</p>
      <p><strong>Color:</strong> {color}</p>
    </div>
  );
}

export default CardAutomovil;
```
En este caso, el componente CardAutomovil recibe `marca`, `modelo`, `anno`, y `color` como props y los muestra en la interfaz. Este componente puede reutilizarse con diferentes valores de props.


## Flujo de Datos Unidireccional
React sigue un flujo de datos unidireccional, lo que significa que los datos fluyen de los componentes padres a los hijos. Las props permiten compartir datos, pero siempre en una dirección: de arriba hacia abajo.

Ejemplo:
``` js
import AutoCard from './AutoCard';

function App() {
  return (
    <div>
      <AutoCard
        marca="Toyota"
        modelo="Corolla"
        anno={2021}
        color="Azul"
      />
      <AutoCard
        marca="Ford"
        modelo="Mustang"
        anno={2020}
        color="Rojo"
      />
    </div>
  );
}
```
Aquí, el componente `App` pasa datos a `CardAutomovil` a través de props, demostrando el flujo de datos unidireccional.

## Reflexión

Al trabajar con esta guía de React, descubrí cómo React facilita la creación de interfaces interactivas. Lo que más me gustó fue aprender a descomponer la UI en pequeños componentes reutilizables, lo que hace que el proyecto se sienta más organizado y fácil de manejar.

También me sorprendió lo intuitivo que resulta JSX, ya que permite combinar JavaScript y "HTML" en un solo lugar. Aprender sobre el manejo del estado fue interesante, pude ver cómo los datos pueden cambiar dinámicamente y actualizar la interfaz sin esfuerzo. Además, entendí la importancia de las props para enviar información entre componentes, lo que mantiene el flujo de datos ordenado.