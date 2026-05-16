import { useState } from "react";

import JobForm from "../components/JobForm";

import ShortlistedCandidates from "../components/ShortlistedCandidates";

const AdminDashboard = () => {

  const [shortlisted, setShortlisted] =
    useState([]);

  const [aiRecommendation, setAIRecommendation] =
    useState("");

  const logout = () => {

    localStorage.clear();

    window.location.href = "/login";

  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Admin Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>

      <hr />

      <JobForm
        setShortlisted={setShortlisted}
        setAIRecommendation={setAIRecommendation}
      />

      <hr />

      <ShortlistedCandidates
        candidates={shortlisted}
        aiRecommendation={aiRecommendation}
      />

    </div>
  );
};

export default AdminDashboard;