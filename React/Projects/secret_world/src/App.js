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
  const [letters,  setLetters] = useState([]);

  const [tryLetter, setTryLetter] = useState([]);
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  }, [words]);

  // Change the state of game to stage 1
  const startGame = useCallback(() => {
    const {word, category} = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map(letter => letter.toUpperCase());

    setSelectCategory(category);
    setSelectWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Verify the input of user and change to stage 2
  const verifyLetter = (letter) => {
    letter = letter.toUpperCase();

    if(tryLetter.find(item => item.value === letter) !== undefined) return;

    let occurrences = letters.reduce((total, l) => (l === letter) ? total + 1 : total, 0);
    if(occurrences > 0){
      setTryLetter(currentTryLetters => [...currentTryLetters, { value: letter, status: "correct"}]);
      let points = Math.ceil((100/letters.length) * occurrences);

      if(score + points > 100) setScore(100);
      else setScore(score + points);
    }else{
      setTryLetter(currentTryLetters => [...currentTryLetters, { value: letter, status: "wrong"}]);
      setLifes(lifes - 1);
    }
  }

  // Check lose condition
  useEffect(() => {
    if(lifes <= 0){
      setTryLetter([]);
      setGameStage(stages[2].name);
    }
  }, [lifes]);

  // Check win condition
  useEffect(() => {
    if(tryLetter.length > 0){
      let uniqueLetters = []; 
      letters.forEach(l => {
        if(!uniqueLetters.includes(l) && l !== ' ') uniqueLetters.push(l);
      });

      let corrects = tryLetter.reduce((total, item) => item.status === "correct" ? total + 1 : total, 0);

      if(corrects === uniqueLetters.length){
        setTryLetter([]);
        setWords(currentWords => {
          console.log(selectCategory, selectWord);
          currentWords[selectCategory] = currentWords[selectCategory].filter(w => w != selectWord);
          return currentWords;
        });
        console.log(words);
        startGame();
      }
    }
  }, [tryLetter, letters, startGame, selectCategory, selectWord])

  // Change to stage 0
  const retry = () => {
    setLifes(3);
    setScore(0);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
       {gameStage === "start" && <StartScreen startGame={startGame} />}

       {gameStage === "game" && <Game 
                                    verifyLetter={verifyLetter} 
                                    category={selectCategory} 
                                    word={selectWord} 
                                    letters={letters} 
                                    tryLetter={tryLetter} 
                                    lifes={lifes} 
                                    score={score} />}

       {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
