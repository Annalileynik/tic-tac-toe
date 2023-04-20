import React from "react";

const Square = (props) => {
    return(
        <button
            onClick={()=>props.openPlace(props.el, props.index)}
            className="square">
            {props.el}
        </button>
    )
}
export default Square;
