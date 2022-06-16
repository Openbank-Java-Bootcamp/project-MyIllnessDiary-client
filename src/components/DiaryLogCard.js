import { Link } from "react-router-dom";

function DiaryLogCard({
  crisisNumber,
  crisisType,
  duration,
  mood,
  comments,
  doctorName,
  id,
}) {
  return (
    <div>
      <div className="DiaryLogCard card">
        <h3>Number of Crisis: </h3>
        <p>{crisisNumber}</p>
        <h3>Crisis Type: </h3>
        <p>{crisisType}</p>
        <h3>Duration: </h3>
        <p>{duration}</p>
        <h3>Mood: </h3>
        <p>{mood}</p>
        <h3>Indications by the Doctor: </h3>
        <p>{comments}</p>
        <h3>Doctor Name: </h3>
        <p>{doctorName}</p>
      </div>
      <Link to={`/diaries/edit/${id}`}>
        <button>Edit Diary</button>
      </Link>
    </div>
  );
}

export default DiaryLogCard;
