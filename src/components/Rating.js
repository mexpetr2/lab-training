import '../style/rating.css';

function Rating(props) {
  let checked;
  checked = Math.round(props.children);

  let star = '';

  switch (checked) {
    case 0:
      star = '☆☆☆☆☆';
      break;
    case 1:
      star = '★☆☆☆☆';
      break;
    case 2:
      star = '★★☆☆☆';
      break;
    case 3:
      star = '★★★☆☆';
      break;
    case 4:
      star = '★★★★☆';
      break;
    case 5:
      star = '★★★★★';
      break;
  }

  return <div className="rate">{star}</div>;
}

export default Rating;
