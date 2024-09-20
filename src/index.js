import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import { registerApplication, start } from "single-spa";

// Create the Web Component class for the React micro frontend
class MicroFrontend extends HTMLElement {
  connectedCallback() {
    // Mount the React app to the Web Component
    const root = ReactDOM.createRoot(this);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // Keep reference to the root to unmount later
    this._root = root;
  }

  disconnectedCallback() {
    if (this._root) {
      // Cleanup when the component is removed
      this._root.unmount();
    }
  }
}

// Define the custom element
customElements.define("react-microfrontend", MicroFrontend);

// Register the micro frontend application with single-spa
registerApplication({
  name: "@amicure/patientmfe",
  // Using the MicroFrontend class
  app: () => Promise.resolve(MicroFrontend),

  activeWhen: ["/react-app"],
});

start();

// For standalone rendering (if needed)
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
