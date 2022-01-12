import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import FeedbackData from "./components/Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); //adds new id to the new feedback object
    setFeedback([newFeedback, ...feedback]); //by using spread operator we will copy all the existing feedback into this array and then add the new one to it which will create a new state
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id)); //it will update the state with the new one where the element with the id that is to be deleted will be excluded
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
