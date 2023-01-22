import '../style/random.css';

function Random(props) {
  return (
    <div className="random">
      Random value beween {props.min} and {props.max} ={'>'}{' '}
      {Math.floor(Math.random() * props.max)}
    </div>
  );
}

export default Random;
