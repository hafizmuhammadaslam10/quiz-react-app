import React, { useState } from "react";
import quizData from "./data/quizData.json";
import "./App.css";
import Quiz from "./Pages/Quiz";

function App() {
  return (
    <div className="app">
      <h1>Wastewater Treatment Certification Prep</h1>
      <Quiz questions={quizData} />
    </div>
  );
}

export default App;
