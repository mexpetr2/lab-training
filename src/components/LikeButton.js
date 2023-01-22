import { useState } from 'react';
import '../style/likebutton.css'

function LikeButton() {
  const [like, setLike] = useState(0);

  let likes = '';

  let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  if (like === 1) {
    likes = `${like} like`;
  } else {
    likes = `${like} likes `;
  }

  function handleCounter() {
    setLike(like + 1);
  }

  let color = colors[like % 6];

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleCounter}>
        {likes}
      </button>
    </div>
  );
}

export default LikeButton;
