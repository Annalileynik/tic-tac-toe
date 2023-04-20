import React, {useEffect, useState} from "react";
import "./App.css"
import {Header} from "./components/Header";
import Board from "./components/Board";

const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [gamerX, setGamerX] = useState(true)
    const [winner, setWinner] = useState(null)
    const[score, setScore]=useState({'X':0, "0":0})
    const handleMove = (el, index) => {
        if (el === null) {
            const gamer = gamerX ? "X" : "0"
            setBoard(board.map((card, ind) =>
                (ind === index) ? gamer : card
            ))
        }
        setGamerX(!gamerX)
    }
    const calculateWinning = () => {
        const setWinning = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < setWinning.length; i++) {
            const [a, b, c] = setWinning[i]
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                setWinner(board[a])
                if (board[a] === 'X') {
                    const newScore = {...score, 'X': score['X'] + 1}
                    setScore(newScore)
                } else {
                    const newScore = {...score, '0': score['0'] + 1}
                    setScore(newScore)
                }
            }
        }
    };
    const restart = () => {
        setBoard(board.map(el=>null))
        setWinner(null)
        setGamerX('X')
    }
    useEffect(() => {
        if (winner !== null) {
            setTimeout(() => {
                restart()
            }, 2000)
        }
    },[winner])

    useEffect(() => {
        calculateWinning()
    }, [board])
    return (
        <div>
            <Header/>
            <Board board={board}
                   handleMove={handleMove}
            />
            {winner && <h3>Congratulation, {winner} has won! </h3>}
            <div> X:{score['X']} </div>
            <div> 0:{score['0']}</div>
        </div>
    )
}
export default App;
