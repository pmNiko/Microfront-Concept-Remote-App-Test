<h1 align="center" >
    Micro Frontend - Implementación de concepto
</h1>

<p align="center">
    <img alt="Microfrontend" src="./images/mf.png" width="40%"/>

</p>

<br/>

---

| Tecnología                       | Documentación                                                                  | Descripción                                                  |
| -------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| React                            | https://react.dev                                                              | Interfaces de usuario                                        |
| Typescript                       | https://www.typescriptlang.org                                                 | Extiende JS - Tipado                                         |
| react-error-boundary             | https://github.com/bvaughn/react-error-boundary                                | Manejos de errores del ciclo de vida de componentes de React |
| Vite                             | https://vitejs.dev                                                             | Empaquetador de modulos                                      |
| @originjs/vite-plugin-federation | https://github.com/originjs/vite-plugin-federation#externalstringpromisestring | Plugin de Vite                                               |
| MUI Material UI                  | https://mui.com/                                                               | Biblioteca de Componentes                                    |

---

<br/>

<p align="center" style="color: blue; margin-top: 4rem" >
 Parcel 1 (App - Remote)
</p>

<p align="center" style="margin-top: 3rem">
    <img alt="App" src="./images/parcel1.png" width="600px"/>
</p>

<br/>

---

<div align="center" style=" margin-top: 4rem; padding: 2rem; boxShadow: 2px 3px 4px 0px rgba(0,0,0,0.4)" width="50%" >
    <p style="color: blue; textAlign: justify">
        ¿Como funciona?
    </p>
    <p>
        La App host o root solamente contiene el encabezado de iconos y el titulo. <br/>
        Los dos recuadros que vemos son modulos federados a travéz del plugin de Vite, por lo que nos permite importalos de manera remota y utilizalos de la manera tradicional como si de modulos locales se tratara. <br/>
        De cualquier manera estamos pudiendo utilizar las caracteristicas de Lazy Suspense, las cuales son ofrecidas por el core de React, permitiendo realizar una carga perezosa de los componentes. <br/>
        Por último hacemos uso de la libreria react-error-bundary que nos permite manejar los errores de render de una manera mas amigable con el usuario final. 
    </p>

</div>

<br/>

---

<p align="center"  style="color: blue; margin-top: 3rem">
    Puesta en marcha 
</p>

<p>
    Descargar el proyecto 
</p>

- Inicio
  - Instale los modulos de node: $ yarn install
  - Despliegue la app en modo dev: $ yarn dev
  - Despliegue el proyecto: $ yarn deploy
  - Ahora para comprobar que se esta sirviendo el chunck ingrese a:
    - http://localhost:5001/assets/remoteEntry.js
    - el puerto esta expuesto de manera estricta.

---
