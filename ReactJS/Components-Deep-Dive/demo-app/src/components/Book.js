import { useState, useEffect } from "react";


export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Mounting' + props.book.title);
    }, []);

    useEffect(() => {
        console.log('Updating' + props.book.title);
    }, [highlighted]);

    const clickHandler = () => {
        setHighlighted(state => !state);
    };

    const deleteHandler = () => {
        setDeleted(true);
    };

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'blue'
    };

    if (deleted) {
        style.backgroundColor = 'red'
    };

    return (
        <li style={style}>
            <article>
                <h2>{props.book.title}</h2>
                <main>{props.book.description}</main>
                <footer>
                    <button onClick={clickHandler}>Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                    <span>Author: {props.book.author}</span>
                </footer>
            </article>
        </li>);
}