import { useState } from 'react';
import { createPortal } from 'react-dom';

function ClickablePicture(props) {
  const [index, setIndex] = useState(0);

  let images = [props.img, props.imgClicked];

  let image = images[index % 2];
  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <div onClick={handleClick}>
      <img onClick={handleClick} src={image}></img>
    </div>
  );
}

export default ClickablePicture;
