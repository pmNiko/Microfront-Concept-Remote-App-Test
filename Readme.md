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
 Parcel 1 (Remote - App)
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
        El parcel representa un fragmento de la app general, que será inyectado de manera remota al shell o host.
        <br/> Este será desarrollado de manera pararela a la app shell y posteriormente expuesto para ser absorbido. 
        <br/> Una de las ventajas de esta estrategia es que nos permite desarrollar de manera vertical sin afectar 
        al resto de la app. Básicamente consiste en escalar graduelmente nuestra app para hacer crecer sus funcionalidades. 
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
