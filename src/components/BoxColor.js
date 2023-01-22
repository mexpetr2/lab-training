import '../style/boxcolor.css';
import rgbHex from 'rgb-hex';

function BoxColor(props) {
  return (
    <div
      className="boxcolor"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      <div className="text">
        rgb({props.r},{props.g},{props.b})
      </div>
      <div className="text">#{rgbHex(props.r, props.g, props.b)}</div>
    </div>
  );
}

export default BoxColor;
