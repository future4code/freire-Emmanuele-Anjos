import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ListTripsPage from "../pages/ListTrips/ListTripsPage";
import ApplicationFromPage from "../pages/ApplicationForm/ApplicationFormPage";
import LoginPage from "../pages/Login/LoginPage";
import AdminHomePage from "../pages/AdminHome/AdminHomePage";
import CreateTripPages from "../pages/CreateTrip/CreateTripPage";
import TripDetailsPage from "../pages/TripDetails/TripDetailsPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="listTrips" element={<ListTripsPage />} />
          <Route path="applicationForm" element={<ApplicationFromPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="adminHome" element={<AdminHomePage />} />
          <Route path="createTrip" element={<CreateTripPages />} />
          <Route path="tripDetails/:id" element={<TripDetailsPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
