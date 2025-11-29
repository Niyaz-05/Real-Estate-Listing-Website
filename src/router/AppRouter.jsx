import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Listings } from "../Pages/Listings/Listings";
import { AddProperty } from "../Pages/AddProperty/AddProperty";
import { Login } from "../Pages/Login/Login";
import { PropertyDetails } from "../Pages/PropertyDetails/PropertyDetails";
import { Navbar } from "../components/Navbar/Navbar";
import { PropertyDetails } from "../Pages/PropertyDetails/PropertyDetails";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetails />} />

      </Routes>
    </BrowserRouter>
  );
};
