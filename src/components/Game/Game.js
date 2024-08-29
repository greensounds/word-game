import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')
  const [numOfGuesses, setNumOfGuesses] = React.useState(0)

  function handleSubmitGuess(guess) {
    const nextGuessList = [...guessList, guess]
    setGuessList(nextGuessList)
    setNumOfGuesses(nextGuessList.length)

    if(guess === answer) {
      setGameStatus('won')
    } else  if(nextGuessList.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    } else {
      setGameStatus('running')
    }
  }

  return <>
    <GuessList guessList={guessList} answer={answer} />
    <GuessInput gameStatus={gameStatus} guessList={guessList} handleSubmitGuess={handleSubmitGuess} setGuessList={setGuessList} />
    { gameStatus === 'won' && (
      <WonBanner numOfGuesses={numOfGuesses} />
    )}
     { gameStatus === 'lost' && (
      <LostBanner answer={answer} />
    )}
  </>;
}

export default Game;
