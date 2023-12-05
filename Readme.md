<h1 align="center" >
    Micro Frontend - Implementación de concepto
</h1>

<p align="center">
    <img alt="Microfrontend" src="./images/mf.png" width="40%"/>

</p>

<br/>

<p align="center">
  <a href="https://github.com/pmNiko/mfe-parcel/wiki">Lea más acerca de su implementación</a>
</p>

<br/>

> .[!TIP]
> Esta es una nota de prueba.

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
    <img alt="App" src="./images/parcel.png" width="600px"/>
</p>

---

<br/>

---

<div align="center" style=" margin-top: 4rem; padding: 2rem; boxShadow: 2px 3px 4px 0px rgba(0,0,0,0.4)" width="50%" >
    <p style="color: blue; textAlign: justify">
        ¿Como funciona?
    </p>
    <p>
        El parcel representa un fragmento de la app general, que será inyectada de manera remota en el App Shell.
        <br/> Este será desarrollado de manera pararela y posteriormente expuesto para ser consumido. 
        <br/> Una de las ventajas de esta estrategia es que nos permite desarrollar de manera vertical sin afectar 
        al resto del equipo. Básicamente consiste en escalar gradualmente el proyecto para lograr los objetivos. 
        <br/> Para conocer más acerca de su implementación y consumo revise la wiki.
    </p>

</div>

- [wiki deploy](https://github.com/pmNiko/mfe-parcel/wiki/4%E2%80%90Deploy)

<br/>

---

<div align="center" style=" margin-top: 4rem; padding: 2rem; boxShadow: 2px 3px 4px 0px rgba(0,0,0,0.4)" width="50%" >
    <p style="color: blue; textAlign: justify">
        Aplicación Contenedora
    </p>
    <p>
        App Shell será aquella aplicación que consuma estos parcel o componentes para renderearlos en su layout bajo demanda.
        En este readme solo se hará referencia al repositorio del mismo para que pueda descargar y verificar su estructura.
    </p>

</div>

- [App Shell](https://github.com/pmNiko/mfe-shell)

<br/>

---
