import '../style/drivercard.css';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="licencecard">
      <img src={props.img}></img>
      <div>
        <span className="name">{props.name}</span>
        <Rating>{props.rating}</Rating>
        <span className="car">
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
