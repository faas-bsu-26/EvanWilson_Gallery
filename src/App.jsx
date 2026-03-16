import { useState } from "react";
import Agents from "./data.json";
import "./App.css";

function App() {
  return (
    <section>
      <div className="section-wrapper">
        <h1>Valorant Agents</h1>
        <div className="gallery-grid">
          {Agents.map((agent) => {
            return (
              <div className="container" key={agent.id}>
                <img src={agent.image} />
                <span>{agent.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
