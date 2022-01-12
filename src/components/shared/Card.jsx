import propTypes from "prop-types";
function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>; //conditional class

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }} //conditional styles
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false, //set false to make card dark
};

Card.propTypes = {
  children: propTypes.node.isRequired,
  reverse: propTypes.bool,
};

export default Card;
