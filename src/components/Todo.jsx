import classes from './Todo.module.css';


const Todo = (props) => {
    const {title, id, complete} = props.todoItem;

    const removeItemHandler = (id) => {
        props.removeHandler(id);
    };

    const completeItemHandler = (id) => {
        props.completeHandler(id);
    };


    return (
        <tr className={classes.rowContainer}>
            <td><input type='radio' onClick={()=>completeItemHandler(id)} checked={complete}/></td>
            <td><span className={`${complete? classes.lineThrough : ''}`}>{title}</span></td>
            <td><button onClick={()=>removeItemHandler(id)}>delete</button></td>
        </tr>    
    )
}

export default Todo;