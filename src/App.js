import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Word from './components/Word';
import './App.css';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import { showNotification as show } from './helpers/helpers';
import Notifaction from './components/Notification';
import PopUp from './components/PopUp';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];




function App() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setwrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
        const handleKeydown = e => {
            const { key, keyCode } = e;

            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(correctLetters => [...correctLetters, letter]);


                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setwrongLetters(wrongLetters => [...wrongLetters, letter]);


                    } else {
                        show(setShowNotification);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown); // => {
        return () => window.removeEventListener('keydown', handleKeydown);

    }, [correctLetters, wrongLetters, playable]);

    function playAgain(){
        setPlayable(true);
        setCorrectLetters([]);
        setwrongLetters([]);

        const random=Math.floor(Math.random() * words.length);
        selectedWord=words[random];
    }
    return ( < >
        <Header / >
        <div className = "game-container" >
        <Figure wrongLetters = { wrongLetters }/ > 
        <WrongLetters wrongLetters = { wrongLetters }/ > 
        <Word selectedWord = { selectedWord }
        correctLetters = { correctLetters }/> 
         
        </div > 
         
        < Notifaction showNotification = { showNotification }/ > 
        <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
        </>
    );
}

export default App;