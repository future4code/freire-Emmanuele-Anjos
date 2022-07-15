import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTrips, goToLogin } from "../../routes/cordinator";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem vindo ao labeX</h1>
      <button onClick={() => goToListTrips(navigate)}>Viagens</button>
      <button onClick={() => goToLogin(navigate)}>Administração</button>
    </div>
  );
};

export default HomePage;
