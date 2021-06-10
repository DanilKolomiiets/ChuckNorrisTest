import "./Quote.css";

const Quote = ({ quote }) => {
  return (
    <div className="Quote-Wrapper">
      <div>{quote}</div>
    </div>
  );
};

export default Quote;
