import { Book } from "./Book";

export const BookList = (props) => {
    const bookElements = props.books.map(book => <Book book={book}/>);

    return (
        <ul>
            {bookElements}
        </ul>
    );
}