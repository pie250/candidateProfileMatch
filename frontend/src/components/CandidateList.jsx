import { useEffect, useState } from "react";

import API from "../api";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    const res = await API.get("/candidates");

    setCandidates(res.data);
  };

  return (
    <div>
      <h2>Candidate List</h2>

      {candidates.map((candidate) => (
        <div key={candidate._id}>
          <h3>{candidate.name}</h3>

          <p>Email: {candidate.email}</p>

          <p>Skills: {candidate.skills.join(", ")}</p>

          <p>Experience: {candidate.experience} years</p>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default CandidateList;