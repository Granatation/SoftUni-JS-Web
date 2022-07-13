export const Book = (props) => {
    return (
        <li>
            <article>
                <h2>{props.book.title}</h2>
                <main>{props.book.description}</main>
                <footer>
                    <span>Author: {props.book.author}</span>
                </footer>
            </article>
        </li>);
}