import { Book } from "./Book";

export const BookList = (props) => {
    return (
        <ul>
            {props.books.map((book,i) => <Book key={i} book={book}/>)}
        </ul>
    );
}