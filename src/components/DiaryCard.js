import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function DiaryCard({ diaryWeek, id }) {
  return (
    <div className="DiaryCard card">
      <Link to={`/diaries/${id}`}>
        <h3>{diaryWeek}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{diaryWeek} </p>
    </div>
  );
}

export default DiaryCard;