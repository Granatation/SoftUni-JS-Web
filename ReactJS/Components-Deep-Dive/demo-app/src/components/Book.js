import { useState, useEffect } from "react";


export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);

    useEffect(() => {
        console.log('Mounting' + props.book.title);
    }, []);

    useEffect(() => {
        console.log('Updating' + props.book.title);
    }, [highlighted]);

    const clickHandler = () => {
        setHighlighted(state => !state);
    };

    let style = {};
    if (highlighted) {
        style.backgroundColor = 'blue'
    };

    return (
        <li onClick={clickHandler} style={style}>
            <article>
                <h2>{props.book.title}</h2>
                <main>{props.book.description}</main>
                <footer>
                    <span>Author: {props.book.author}</span>
                </footer>
            </article>
        </li>);
}