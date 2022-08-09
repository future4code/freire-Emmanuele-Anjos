import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToListTrips } from "../../routes/cordinator";

function ApplicationForm() {
  const navigate = useNavigate();

  const subscribe = () => {
    goToHomePage(navigate);
  };

  return (
    <div>
      <button onClick={() => goToListTrips(navigate)}>Voltar</button>
      <button onClick={() => subscribe()}>Enviar</button>
    </div>
  );
}

export default ApplicationForm;
