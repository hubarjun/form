import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import VotingPage from "./VotingPage";
import ResultsPage from "./pages/ResultsPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Voting</Link>
        <Link to="/results">Results</Link>
      </nav>

      <Routes>
        <Route path="/" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
