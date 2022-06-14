import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function PatientCard({  name, id }) {
  return (
    <div className="DiaryCard card">
      <Link to={`/users/${id}`}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
}

export default PatientCard;