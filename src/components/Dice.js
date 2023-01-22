import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptydice from '../assets/images/dice-empty.png';

import '../style/dice.css';
import { useState } from 'react';

function Dice() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 6) + 1);

  let dice;

  const handleClick = () => {
    setRandom(0);

    setTimeout(() => {
      setRandom(Math.floor(Math.random() * 6) + 1);
    }, 1000);
  };

  switch (random) {
    case 0:
      dice = emptydice;
      break;
    case 1:
      dice = dice1;
      break;
    case 2:
      dice = dice2;
      break;
    case 3:
      dice = dice3;
      break;
    case 4:
      dice = dice4;
      break;
    case 5:
      dice = dice5;
      break;
    case 6:
      dice = dice6;
      break;
  }

  return (
    <div className="dice">
      <img alt="" onClick={handleClick} src={dice}></img>
    </div>
  );
}

export default Dice;
