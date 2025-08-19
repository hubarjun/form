import React, { createContext, useState } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    A: 0,
    B: 0,
    C: 0,
  });

  const voteFor = (candidate) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const leadingCandidate = () => {
    let maxVotes = Math.max(...Object.values(votes));
    let leaders = Object.keys(votes).filter((c) => votes[c] === maxVotes);
    return leaders.length > 1 ? "Tie" : leaders[0];
  };

  return (
    <VoteContext.Provider
      value={{ votes, voteFor, totalVotes, leadingCandidate }}
    >
      {children}
    </VoteContext.Provider>
  );
};
