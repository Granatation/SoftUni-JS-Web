import { useState, useEffect } from 'react';
import { Spinner } from './Spinner';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const [todos, setTodos] = useState()

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(result => {
                setTodos(Object.values(result));
            })
    }, []);

    const changeStatusHandler = (todo) => {
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({...todo, isCompleted: !todo.isCompleted })
            })
            .then(res => res.json())
            .then(result => {
                setTodos(oldTodos => oldTodos.map(x => x._id == todo._id ? result : x))
            })

    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos ? todos.map(todo => <TodoItem key={todo._id} todo={todo} changeStatus={changeStatusHandler} />) : <Spinner />}
            </tbody>
        </table>
    );
}