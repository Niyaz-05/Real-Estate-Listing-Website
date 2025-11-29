import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Property Details</h1>
      <p>Property ID: {id}</p>
    </div>
  );
};

export default PropertyDetails;
