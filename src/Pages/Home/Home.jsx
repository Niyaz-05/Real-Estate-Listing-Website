import "./Home.css";
import { PropertyCard } from "../../components/PropertyCard/PropertyCard";
import { useProperty } from "../../Context/PropertyContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { properties } = useProperty();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    navigate(`/listings?search=${query}`);
  };

  return (
    <div className="home-page">

      {/* HERO BANNER */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Home</h1>
          <p>Search through thousands of verified properties.</p>

          <form className="search-bar" onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search by location..." />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="featured">
        <h2>Featured Properties</h2>

        <div className="property-grid">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      
    </div>
  );
};
