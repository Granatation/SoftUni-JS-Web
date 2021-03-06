import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BookList } from './components/BookList';
import {Timer} from './components/Timer';
import {Clicker} from './components/Clicker'
import {Counter} from './components/Counter'

function App() {
    const books = [
        {
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            description: 'Nice'
        },
        {
            title: 'Harry Potter2',
            author: 'J.K. Rowling2',
            description: 'Nice2'
        }, {
            title: 'Harry Potter3',
            author: 'J.K. Rowling3',
            description: 'Nice3'
        },
    ];

    return (
        <div className="App">
            <Header logo={logo} />
            <BookList books={books}/>
            <Counter/>
            <Clicker/>
            <Timer/>
        </div>
    );
}

export default App;
