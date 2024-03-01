// This is a functional component that takes a prop called value and returns a button element with the value prop as its text.
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default Square;
