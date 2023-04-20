import React from "react";

const Square = ({el, index, handleMove}) => {
    return(
        <button
            onClick={()=>handleMove(el, index)} className='square'>
            {el}
        </button>
    )
}
export default Square;
