import { Link } from "react-router-dom";
import "./PropertyCard.css";

export const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="property-card">
      <img src={property.image} alt={property.title} />

      <div className="info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <h4>₹ {property.price.toLocaleString()}</h4>
      </div>
    </Link>
  );
};
