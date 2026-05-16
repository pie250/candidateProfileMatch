import CandidateForm from "../components/CandidateForm";

const CandidateDashboard = () => {

  const logout = () => {

    localStorage.clear();

    window.location.href = "/login";

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