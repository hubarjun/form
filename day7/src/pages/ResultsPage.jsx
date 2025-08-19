import React, { useContext } from "react";
import { VoteContext } from "../VoteContext";

function ResultsPage() {
  const { votes, totalVotes, leadingCandidate } = useContext(VoteContext);

  return (
    <div className="page">
      <h2>Results Page</h2>
      {Object.keys(votes).map((candidate) => (
        <p key={candidate}>
          Candidate {candidate}: {votes[candidate]} votes
        </p>
      ))}
      <h3>Total Votes: {totalVotes}</h3>
      <h3>Leading Candidate: {leadingCandidate()}</h3>
    </div>
  );
}

export default ResultsPage;
