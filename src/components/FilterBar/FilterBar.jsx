import "./FilterBar.css";
import { useState } from "react";

export const FilterBar = () => {
  const [filters, setFilters] = useState({
    location: "",
    price: "",
    type: "",
  });

  const onChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    console.log("Filters applied:", filters);
    // Later we will connect this to real filter logic
  };

  return (
    <div className="filter-container">
      <select name="location" onChange={onChange}>
        <option value="">Location</option>
        <option value="mumbai">Mumbai</option>
        <option value="pune">Pune</option>
        <option value="delhi">Delhi</option>
      </select>

      <select name="price" onChange={onChange}>
        <option value="">Price Range</option>
        <option value="0-1000000">Under 10L</option>
        <option value="1000000-3000000">10L - 30L</option>
        <option value="3000000-6000000">30L - 60L</option>
      </select>

      <select name="type" onChange={onChange}>
        <option value="">Property Type</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="plot">Plot</option>
      </select>

      <button onClick={applyFilters}>Apply</button>
    </div>
  );
};
