import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import {range} from '../../utils'

import Guess from '../Guess/Guess';

function GuessList({guessList, answer}) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <Guess key={num} value={guessList[num]} answer={answer} />
    ))}
  </div>;
}

export default GuessList;
