import { useNavigate } from "react-router-dom";

import CandidateForm from "../components/CandidateForm";

const CandidateDashboard = () => {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.clear();

    navigate("/login");

  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Candidate Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>

      <hr />

      <CandidateForm />

    </div>
  );
};

export default CandidateDashboard;