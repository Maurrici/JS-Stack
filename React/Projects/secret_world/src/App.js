// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Database
import { worldList } from './database/data';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(worldList);

  const [selectCategory, setSelectCategory] = useState("");
  const [selectWord, setSelectWord] = useState("");
  const [letters,  setLetters] = useState("");

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  }

  // Change the state of game to stage 1
  const startGame = () => {
    const {word, category} = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map(letter => letter.toUpperCase());

    setSelectCategory(category);
    setSelectWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }

  // Verify the input of user and change to stage 2
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // Change to stage 0
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
       {gameStage === "start" && <StartScreen startGame={startGame} />}
       {gameStage === "game" && <Game verifyLetter={verifyLetter} category={selectCategory} word={selectWord} letters={letters} />}
       {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
