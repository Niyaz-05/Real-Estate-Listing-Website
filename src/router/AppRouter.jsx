import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Listings from "../pages/Listings/listings.jsx";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails.jsx";
import Login from "../pages/Login/Login.jsx";
import AdminDashboard from "../pages/Admin/AdminDashboard.jsx";
import AddProperty from "../pages/AddProperty/AddProperty.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-property" element={<AddProperty />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
