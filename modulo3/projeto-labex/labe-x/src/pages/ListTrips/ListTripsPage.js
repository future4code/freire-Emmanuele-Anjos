import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToApplicationForm } from "../../routes/cordinator";

function ListTripsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationForm(navigate)}>Inscreva-se</button>
    </div>
  );
}

export default ListTripsPage;
