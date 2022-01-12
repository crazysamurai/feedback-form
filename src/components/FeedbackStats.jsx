import propTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //calculate avg rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, ""); // toFixed will keep only 1 decimal place i.e 8.42 = 8.4 and .replace will remove any trailing 0 to the number i.e. 8.0 = 8

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: propTypes.array.isRequired,
};

export default FeedbackStats;
