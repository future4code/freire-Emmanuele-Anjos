import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  goToTripDetails,
  goToBack,
  goToCreateTrip,
} from "../../routes/cordinator";
import { trips, setTrips, getTrips } from "axios";

const AdminHomePage = () => {
  axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/futureX/:emmanuele/trips"
    )

    .then((res) => {
      setTrips(res.data.trips);
      console.log(res.data.trips);
    });

  useEffect(() => {
    getTrips();
  }, []);

  const navigate = useNavigate();

  const renderTrips = trips.map((item, index) => {
    return (
      <button onClick={() => goToTripDetails(navigate)}>{item.name}</button>
    );
  });

  return (
    <div>
      <h1>Painel Administrativo</h1>

      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
      <button>Logout</button>
    </div>
  );
};

export default AdminHomePage;
