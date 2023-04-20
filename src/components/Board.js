import React from "react";
import Square from "./Square";

const Board = ({board, handleMove}) => {
    return(
        <div className='board'>
            {board.map((el, index)=>
            <Square
            key={index}
            el={el}
            index={index}
            handleMove={handleMove}
            />
                )}
        </div>
    )
}
export default Board;
