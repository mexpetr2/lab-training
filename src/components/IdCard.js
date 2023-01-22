import '../style/idcard.css';

function IdCard(props) {
  return (
    <div className="idcard">
      <div className="picture">
        <img src={props.picture}></img>
      </div>
      <div>
        <div className="text">
          <span className="idcardtext">First name : </span>
          {props.firstName}
        </div>
        <div>
          <span className="idcardtext">Last name : </span>
          {props.lastName}
        </div>
        <div>
          <span className="idcardtext">Heigth : </span>
          {props.gender}
        </div>
        <div>
          <span className="idcardtext">Gender : </span>
          {props.height}
        </div>
        <div>
          <span className="idcardtext">Birth : </span>
          {props.birth.toDateString()}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
