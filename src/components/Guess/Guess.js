import React from 'react';
import { range } from '../../utils';
import {checkGuess} from '../../game-helpers'

function Guess({ value, answer }) {
  const result = checkGuess(value, answer)

  return <div>
    <p className="guess">
      {range(5).map((num) => <span key={num} className={`cell ${result ? result[num]['status'] : undefined}`}>{value ? value[num] : undefined}</span>)}
    </p>
  </div>;
}

export default Guess;
