import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function DiaryCard({ diaryDate, id }) {
  return (
    <div className="DiaryCard card">
      <Link to={`/diaries/${id}`}>
        <h3>{diaryDate}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{diaryDate} </p>
    </div>
  );
}

export default DiaryCard;