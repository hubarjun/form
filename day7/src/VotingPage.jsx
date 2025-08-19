import React, { useContext } from "react";
import { VoteContext } from "./VoteContext";

function VotingPage() {
  const { votes, voteFor } = useContext(VoteContext);

  return (
    <div className="page">
      <h2>Voting Page</h2>
      {Object.keys(votes).map((candidate) => (
        <div key={candidate} className="card">
          <h3>Candidate {candidate}</h3>
          <p>Votes: {votes[candidate]}</p>
          <button onClick={() => voteFor(candidate)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default VotingPage;
