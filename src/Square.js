const Square = (props) => {
    return (
        <button
            onClick={()=>props.move(props.value, props.index)}
            className="square">
            {props.value}
        </button>
    )
}
export default Square
