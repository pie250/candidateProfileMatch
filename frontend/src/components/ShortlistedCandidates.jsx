const ShortlistedCandidates = ({
  candidates,
  aiRecommendation,
}) => {
  return (
    <div>
      <h2>Shortlisted Candidates</h2>

      {candidates.map((candidate) => (
        <div key={candidate._id}>
          <h3>{candidate.name}</h3>

          <p>
            Match Score:
            <strong>
              {" "}
              {candidate.matchScore}%
            </strong>
          </p>

          <p>
            Matched Skills:
            {candidate.matchedSkills.join(", ")}
          </p>

          <hr />
        </div>
      ))}

      <h2>AI Recommendation</h2>

      <p>{aiRecommendation}</p>
    </div>
  );
};

export default ShortlistedCandidates;