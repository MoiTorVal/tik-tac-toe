// This is a functional component that takes a prop called value and returns a button element with the value prop as its text.

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
