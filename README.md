# Ejercicios Introducción a React: Estado, Eventos, formularios, enrutamiento y llamadas a API

En esta clase, continuaremos explorando React y nos centraremos en el manejo del estado y eventos en los componentes de React. Además, aprenderemos sobre la comunicación entre componentes, el uso de formularios, el enrutamiento y cómo realizar llamadas a API en una aplicación de React.

Para empezar, hemos proporcionado un ejemplo inicial del **Ejercicio 1** como punto de partida.

Este proyecto ha sido configurado utilizando Vite, un entorno de desarrollo rápido para aplicaciones web con React.

- Documentación Vite: https://vitejs.dev/guide/

## Cómo empezar

Siga estos pasos para ejecutar el proyecto:

1. Una vez hecho el fork del repositorio original, clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/introduccion-react-02.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd introduccion-react-02
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

- Cada ejercicio se encuentra en una carpeta separada con su número correspondiente. Deberás crear un nuevo componente llamado "EjercicioX" (donde X es el número del ejercicio) y desarrollar la solución dentro de esa carpeta. Luego, importa y utiliza el componente en tu archivo principal de la aplicación.

### Ejercicio 1: Comunicación entre componentes

#### Objetivo:

- Practicar la comunicación entre componentes mediante la propagación de props.

#### Instrucciones:

1. Crea un componente llamado `ParentComponent`.
2. Dentro de `ParentComponent`, crea una variable de estado llamada `message` con un valor inicial.
3. Crea un componente hijo llamado `ChildComponent`.
4. Propaga la variable `message` como una prop al componente `ChildComponent`.
5. En el componente `ChildComponent`, muestra el valor de `message` en la pantalla.
6. Implementa un botón en `ParentComponent` que permita cambiar el valor de `message` y observe cómo se actualiza en `ChildComponent`.

### Ejercicio 2: Uso de formularios en React

#### Objetivo:

- Aprender cómo manejar formularios en React.
- Utilizar los eventos `onChange` y `onSubmit` en un formulario.

#### Instrucciones:

1. Crea un formulario con los siguientes campos: Nombre, Email y Mensaje.
2. Crea un componente llamado `Formulario` que contenga el formulario.
3. Implementa funciones para manejar los eventos `onChange` de los campos del formulario y actualiza el estado correspondiente para cada campo.
4. Implementa una función para manejar el evento `onSubmit` del formulario y muestra los valores ingresados en la consola.

### Ejercicio 3: Enrutamiento (Routing) en React

#### Objetivo:

- Aprender a implementar enrutamiento en una aplicación de React.
- Utilizar la biblioteca React Router para gestionar las rutas de la aplicación.

#### Instrucciones:

1. Instala React Router en tu proyecto si aún no lo has hecho: [React Router](https://reactrouter.com/).
2. Configura las siguientes rutas en tu aplicación:
   - Ruta de inicio ("/"): Mostrará un mensaje de bienvenida.
   - Ruta de Acerca de ("/about"): Mostrará información sobre la empresa o el proyecto.
   - Ruta de Contacto ("/contact"): Mostrará un formulario de contacto.
   - Ruta página no encontrada ("\*"): Se mostrará siempre que se ponga en el navegador una ruta no definida en nuestra applicación.
3. Crea componentes separados para cada una de las rutas.
4. Utiliza React Router para definir y renderizar las rutas en tu aplicación.
5. Agrega enlaces de navegación en la barra de navegación para cada ruta.
6. Implementa el enrutamiento para que cuando el usuario haga clic en un enlace, la vista correspondiente se muestre en la pantalla.

Ejemplo:

1. Primero deberiamos instalar la libreria react-router-dom de la siguiente manera, pero para este proyecto ya la encontrareis instalada y podeis saltaros este paso:

   ```bash
   npm install react-router-dom
   ```

2. Tenemos distintas opciones de routers para realizar el enrutamiento, pero nosotros utilizaremos el "BrowserRouter". Primero debemos hacer wrap (envolver) de la app con el enrutador.

- Fichero main.jsx

  ```jsx
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  //Importamos BrowserRouter de react-router-dom
  import { BrowserRouter } from 'react-router-dom'
  import App from './App.jsx'
  import '../index.css'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* Añadimos el BrowserRouter que envuelve la aplicación para poder añadir las rutas de la app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
  ```

3. Creamos una carpeta "pages" dentro de src y añadimos los siguientes componentes paginas (Home, About, Contact y NotFound):

- Home.jsx (Añadimos el contenido que teniamos en App.jsx)

  ```jsx
  import Ejercicio1 from '../components/Ejercicio1'
  import Ejercicio2 from '../components/Ejercicio2'
  import Ejercicio3 from '../components/Ejercicio3'
  import Ejercicio4 from '../components/Ejercicio4'
  import Footer from '../components/Footer'
  import Header from '../components/Header'
  import TituloPrincipal from '../components/TituloPrincipal'

  export default function Home() {
    return (
      <>
        <Header />
        <main>
          <TituloPrincipal />
          <Ejercicio1 />
          <Ejercicio2 />
          <Ejercicio3 />
          <Ejercicio4 />
        </main>
        <Footer />
      </>
    )
  }
  ```

- About.jsx

  ```jsx
  export default function About() {
    return (
      <div>
        <h1>Página sobre nosotros</h1>
      </div>
    )
  }
  ```

- Contact.jsx

  ```jsx
  export default function Contact() {
    return (
      <div>
        <h1>Página de Formulario de contacto</h1>
      </div>
    )
  }
  ```

- NotFound.jsx (Añadimos el componente "Link" de react-router-dom para volver a la pagina de inicio)

  ```jsx
  import { Link } from 'react-router-dom'

  export default function NotFound() {
    return (
      <div>
        <h1>Error 404 - Página no encontrada</h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }
  ```

4. Definimos las rutas de nuestra app en el componente App.

- Fichero App.jsx

  ```jsx
  // Importamos Routes y Route de react-router-dom
  import { Route, Routes } from 'react-router-dom'
  import '../index.css'
  import About from './pages/About'
  import Contact from './pages/Contact'
  import Home from './pages/Home'
  import NotFound from './pages/NotFound'

  export default function App() {
    return (
      // Definimos las Rutas con el componente Padre Routes
      <Routes>
        <!-- Definimos cada ruta de nuestra app con el componente Route. En este caso decimos que es el index y no hace -->
        falta poner ninguna ruta.
        <Route index element={<Home />} />
        <!-- Definimos la ruta que corresponde en "path" y en element ponemos el componente pagina que tiene que ser renderizado.-->
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <!-- Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta
          actúa como una captura de todas las URL para las cuales no tenemos rutas
          explícitas definidas. -->
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }
  ```

5. Creamos nuestro componente Navegacion y añadimos los Links con las rutas de nuestra applicación.

- Fichero Navegacion.jsx

  ```jsx
  import { Link } from 'react-router-dom'

  export default function Navegacion() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    )
  }
  ```

6. Añadimos nuestro componente Navegacion al Ejercicio3 y tambien en las otras paginas (Excepto NotFound).

- Ejemplo en pagina About (Fichero About.jsx):

  ```jsx
  import Navegacion from '../components/Ejercicio3/Navegacion'

  export default function About() {
    return (
      <div>
        <h1>Página sobre nosotros</h1>
        <Navegacion />
      </div>
    )
  }
  ```

### Ejercicio 4: Llamadas a API en React

#### Objetivo:

- Aprender a realizar llamadas a una API externa en una aplicación de React.
- Utilizar la función `fetch` para obtener datos de una API.
- Renderizar los personajes de la api de Rick & Morty y mostrar su imagen y nombre.

#### Instrucciones:

1. Crea un componente llamado `Personajes`.
2. Utiliza el hook `useEffect` para realizar una llamada a la API de rick and morty https://rickandmortyapi.com/api/character cuando el componente se monta.
3. Maneja el estado `cargando (loading)` cuando se inicia y termina la petición a la API con el hook `useState`.
4. Almacena los datos de recibidos en una variable usando el hook `useState`.
5. Muestra los datos obtenidos de la API en la pantalla usando el metodo `map` de manera legible (por ejemplo, en una lista) y muestra minimo la `imagen` y el `nombre del personaje`.
6. Maneja posibles errores en la llamada a la API y muestra un mensaje adecuado en caso de error.

¡Diviértete trabajando en estos ejercicios y sigue explorando React! Si tienes alguna pregunta o necesitas ayuda, no dudes en consultar la documentación de React o buscar recursos en línea. ¡Happy coding!

Recursos adicionales:

- [Documentación de React](https://es.react.dev/learn)
- [Gestión del estado en React](https://es.react.dev/learn/managing-state)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [Fetch API en JavaScript](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
