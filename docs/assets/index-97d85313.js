import { importShared } from './__federation_fn_import.js';
import ParcelTest, { j as jsxDevRuntimeExports } from './__federation_expose_ParcelTest-bf29a39b.js';
import { r as reactDomExports } from './index-13bed1e6.js';

var client = {};

var m = reactDomExports;
{
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  client.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  client.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

function App() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ParcelTest, {}, void 0, false, {
    fileName: "/home/martin/Development/Micro-Frontends/Prueba-de-concepto/Microfront-Concept-Remote-App-Test/src/App.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

const index = '';

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(App, {}, void 0, false, {
    fileName: "/home/martin/Development/Micro-Frontends/Prueba-de-concepto/Microfront-Concept-Remote-App-Test/src/main.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, globalThis) }, void 0, false, {
    fileName: "/home/martin/Development/Micro-Frontends/Prueba-de-concepto/Microfront-Concept-Remote-App-Test/src/main.tsx",
    lineNumber: 7,
    columnNumber: 3
  }, globalThis)
);
