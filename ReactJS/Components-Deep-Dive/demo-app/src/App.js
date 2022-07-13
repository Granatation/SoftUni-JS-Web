import logo from './logo.svg';
import './App.css';
import {BookList} from './components/BookList';

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
      <header className="App-header">
        <BookList books={books}/>
      </header>
    </div>
  );
}

export default App;
