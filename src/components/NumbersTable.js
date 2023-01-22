import '../style/numbertables.css';

function NumbersTable(props) {
  let numbers = [...Array(props.limit).keys()].map((i) => i + 1);

  const listItems = numbers.map((number) => <div>{number}</div>);

  return (
    <div className="listnumbers">
      <div className="listnumber">{listItems}</div>
    </div>
  );
}

export default NumbersTable;
