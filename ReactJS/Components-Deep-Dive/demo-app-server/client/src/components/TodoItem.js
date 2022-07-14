export const TodoItem = (props) => {
    let className = 'todo';
    if (props.todo.isCompleted) {
        className += ' is-completed'
    }

    return (
        <tr className={className}>
            <td>{props.todo.text}</td>
            <td>{props.todo.isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={() => props.changeStatus(props.todo)} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}