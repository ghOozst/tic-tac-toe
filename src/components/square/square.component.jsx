import './square.style.css';

const Square = ({ value, onClickEvent }) => {
  return (
    <button className="square-container" onClick={onClickEvent}>
      {value}
    </button>
  );
};

export default Square;
