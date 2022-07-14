import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  goToTripDetails,
  goToBack,
  goToCreateTrip,
} from "../../routes/cordinator";

const AdminHomePage = () => {
  axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/futureX/:emmanuele/trips"
    )

    .then((res) => {
      setTrips(res.data.trips);
      console.log(res.data.trips);
    });
};

useEffect(() => {
  getTrips();
}, []);

export default AdminHomePage;
