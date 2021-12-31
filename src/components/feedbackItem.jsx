import propTypes from "prop-types";
import { FaTimes } from "react-icons/fa"; //imports specifically from font-awesome
import Card from "./shared/Card";
function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      {/* these are the children to the card component which are passed to the it */}
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
};

export default FeedbackItem;
