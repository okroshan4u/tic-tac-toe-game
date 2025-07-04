import React from 'react'
import { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    // console.log(state)
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const array of winnerLogic) {
            const [a, b, c] = array;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }

        }
        return null;
    }

    const isWinner = checkWinner()
    const isDraw = !isWinner && state.every(cell => cell !== null);

    const handleClick = (index) => {

        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        // console.log(copyState)
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const handleReset = () => {
        setState(Array(9).fill(null))
    };


    return (
        <div className='boad-container'>
            {isWinner ? (<> {isWinner} won the game {" "} <button onClick={handleReset}>Play Again</button> </>) : isDraw ? (
                <>
                    <h2>It's a draw!</h2>
                    <button onClick={handleReset}>Play Again</button>
                </>
            ) : <>
            
            <h4> Player {isXTurn ? "X" : "O"} please move</h4>
             <div className="board-row">
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(3)} value={state[3]} />
                    <Square onClick={() => handleClick(4)} value={state[4]} />
                    <Square onClick={() => handleClick(5)} value={state[5]} />
                </div>
                <div className="board-row">
                    <Square onClick={() => handleClick(6)} value={state[6]} />
                    <Square onClick={() => handleClick(7)} value={state[7]} />
                    <Square onClick={() => handleClick(8)} value={state[8]} />
                </div>
            </>}
        </div>
    )
}

export default Board
