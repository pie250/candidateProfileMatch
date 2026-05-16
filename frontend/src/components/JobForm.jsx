import { useState } from "react";

import API from "../api";

const JobForm = ({
  setShortlisted,
  setAIRecommendation,
}) => {
  const [job, setJob] = useState({
    requiredSkills: "",
    minExperience: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      requiredSkills: job.requiredSkills.split(","),
      minExperience: Number(job.minExperience),
    };

    const matchRes = await API.post(
      "/match",
      payload
    );

    setShortlisted(matchRes.data);

    const aiRes = await API.post(
      "/match/ai",
      payload
    );

    setAIRecommendation(aiRes.data.recommendation);
  };

  return (
    <div>
      <h2>Job Requirement</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="requiredSkills"
          placeholder="Required Skills"
          value={job.requiredSkills}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="minExperience"
          placeholder="Minimum Experience"
          value={job.minExperience}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Shortlist Candidates
        </button>
      </form>
    </div>
  );
};

export default JobForm;