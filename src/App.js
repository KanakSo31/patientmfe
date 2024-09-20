import React from "react";
import "./App.css";
import PatientList from "./components/paitentList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OpenMRS Patient Records</h1>
      </header>
      <PatientList />
    </div>
  );
}

export default App;
