
function DiaryLogCard({ crisisNumber, crisisType, duration, mood }) {
    return (
      <div className="DiaryLogCard card">
        <h3>Number of Crisis: </h3>
        <p>{crisisNumber}</p>
        <h3>Crisis Type: </h3>
        <p>{crisisType}</p>
        <h3>Duration: </h3>
        <p>{duration}</p>
        <h3>Mood: </h3>
        <p>{mood}</p>
      </div>
    );
  }
  
  export default DiaryLogCard;
  