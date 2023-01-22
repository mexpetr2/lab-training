import '../style/creditcard.css';

import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/master-card.png';

let logo = '';

function CreditCard(props) {
  if (props.type === 'Visa') {
    logo = visa;
  } else {
    logo = mastercard;
  }

  let expire = '';

  if (props.expirationMonth.toString().length < 2) {
    expire = '0' + props.expirationMonth;
  } else {
    expire = props.expirationMonth;
  }
  return (
    <div
      className="card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="logo">
        <img src={logo} alt={props.type}></img>
      </div>
      <div className="number">
        •••• •••• •••• {props.number.substr(props.number.length - 4)}
      </div>
      <div className="expire_bank">
        <div className="expire">
          Expires {expire}/
          {props.expirationYear
            .toString()
            .substr(props.expirationYear.toString().length - 2)}
        </div>
        <div className="bank">{props.bank}</div>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
