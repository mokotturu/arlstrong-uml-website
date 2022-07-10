import React from "react";
import { hydrate } from "react-dom";
import ReactDOM from "react-dom/client";
import './css/index.css';
import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";

const root = document.getElementById('root');
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  ReactDOM.createRoot(root).render(<App />);
}
