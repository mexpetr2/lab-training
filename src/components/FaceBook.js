import profiles from '../data/berlin.json';
import '../style/facebook.css';

function FaceBook() {
  console.log(profiles);
  return (
    <div className="facebook">
      <div className="picture">
        <img src={profiles.img}></img>
      </div>
      <div>
        <div>
          <span className="facebook_text">
            First name : {profiles.firstName}
          </span>
        </div>
        <div>
          <span className="facebook_text">Last name : {profiles.lastName}</span>
        </div>
        <div>
          <span className="facebook_text">Country : {profiles.country}</span>
        </div>
        {/* <div>
          <span className="idcardtext">Type : </span>
          {profiles.isStudent}
        </div> */}
      </div>
    </div>
  );
}

export default FaceBook;
