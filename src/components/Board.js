import Square from "../Square";

const Board = (props) => {
    return(
        <div className="board">
            {props.game.map((elem,index)=>
            <Square
                key={index}
                index={index}
            value={elem}
            move={props.move}
            />)}
        </div>
    )
}
export default Board;
