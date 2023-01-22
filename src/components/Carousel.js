import { useState } from 'react';

function Carousel(props) {
  const [index, Setindex] = useState(0);

  // console.log(props.images);

  const handleLeft = () => {
    Setindex(index - 1);
  };

  const handleRight = () => {
    Setindex(index + 1);
  };

  let image = props.images[index % 4];
  return (
    <div>
      <button onClick={handleLeft}>Left</button>
      <img src={image}></img>
      <button onClick={handleRight}>Left</button>
    </div>
  );
}

export default Carousel;
