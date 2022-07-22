import { Route, Routes, useNavigate  } from 'react-router-dom';
import { useEffect, useState} from "react";
import uniqid from 'uniqid'

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Catalog } from './components/Catalog/Catalog';
import { GameDetails } from './components/GameDetails/GameDetails';

import * as gameService from './services/gameService';
import './App.css';


function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const addComment = (gameId, comment) => {
    setGames(state => {
      const game = state.find(x => x._id == gameId);

      const comments = game.comments || [];
      comments.push(comment);

      return [
        ...state.filter(x => x._id !== gameId),
        { ...game, comments }
      ]
    })
  }

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      })
  }, []);

  const addGameHandler = (gameData) => {
    setGames(state => [
      ...state,
      {
        ...gameData,
        _id: uniqid()
      }
    ]);
    navigate('/catalog')
  }

  return (
    <div id="box">

      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home games={games} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create addGame={addGameHandler} />} />
          <Route path='/catalog' element={<Catalog games={games} />} />
          <Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment} />} />
        </Routes>
      </main>

      {/* <section id="edit-page" class="auth">
        <form id="edit">
          <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="" />

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="" />

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="" />

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="" />

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Edit Game" />

          </div>
        </form>
      </section> */}

    </div>
  );
}

export default App;
