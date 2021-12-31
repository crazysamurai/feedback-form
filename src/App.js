import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import FeedbackData from "./components/Data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id)); //it will update the state with the new one where the element with the id that is to be deleted will be excluded
    }
  };
  return (
    <div>
      <Header />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
