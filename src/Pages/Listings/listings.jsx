import "./Listings.css";
import { useLocation } from "react-router-dom";
import { useProperty } from "../../Context/PropertyContext";
import { PropertyCard } from "../../components/PropertyCard/PropertyCard";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { useMemo } from "react";

export const Listings = () => {
  const { properties } = useProperty();
  const location = useLocation();

  // Get search from URL
  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  // Filter Logic
  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      const matchesSearch =
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [properties, searchQuery]);

  return (
    <div className="listings-page">
      <div className="listings-header">
        <h1>Available Properties</h1>
        <p>Find the property that matches your lifestyle and budget.</p>
      </div>

      {/* FILTER BAR */}
      <FilterBar />

      {/* LISTING GRID */}
      <div className="listings-grid">
        {filteredProperties.length === 0 ? (
          <h3>No properties found 😢</h3>
        ) : (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}
      </div>
    </div>
  );
};
