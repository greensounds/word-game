import React from 'react';

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [guess, setGuess] = React.useState('')

  function handleGuessSubmit(e) {
    e.preventDefault()
    handleSubmitGuess(guess)
    console.log({ guess })
    setGuess('')
    
  }
  return <div>
    <form onSubmit={handleGuessSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={gameStatus !== 'running'} required pattern="[a-zA-Z]{5}" title="5 letter word" id="guess-input" type="text" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} />
    </form>
  </div>;
}

export default GuessInput;
