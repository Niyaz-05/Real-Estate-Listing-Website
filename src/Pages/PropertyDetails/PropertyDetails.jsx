import "./PropertyDetails.css";
import { useParams } from "react-router-dom";
import { useProperty } from "../../Context/PropertyContext";

export const PropertyDetails = () => {
  const { id } = useParams();
  const { properties } = useProperty();

  // Find property by ID
  const property = properties.find((item) => item.id.toString() === id);

  if (!property) return <h2>Property not found.</h2>;

  return (
    <div className="details-page">

      {/* IMAGE BANNER */}
      <div className="banner">
        <img src={property.image} alt={property.title} />
      </div>

      <div className="details-content">
        
        {/* TITLE */}
        <h1>{property.title}</h1>
        <p className="location">{property.location}</p>

        {/* PRICE */}
        <h2 className="price">₹ {property.price.toLocaleString()}</h2>

        {/* DESCRIPTION */}
        <section className="section">
          <h3>Property Description</h3>
          <p>{property.description}</p>
        </section>

        {/* AMENITIES */}
        <section className="section">
          <h3>Amenities</h3>
          <ul className="amenities">
            {property.amenities?.map((a, index) => (
              <li key={index}>{a}</li>
            ))}
          </ul>
        </section>

        {/* CONTACT BUTTON */}
        <button className="contact-btn">
          Contact Agent
        </button>

      </div>
    </div>
  );
};
