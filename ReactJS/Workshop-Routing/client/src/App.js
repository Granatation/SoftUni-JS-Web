import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Catalog } from './components/Catalog/Catalog';
import * as gameService from './services/gameService';

import './App.css';


function App() {
  const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

  return (
    <div id="box">

      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home games={games}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/catalog' element={<Catalog games={games}/>}/>
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

      {/* <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">

          <div class="game-header">
            <img class="game-img" src="images/MineCraft.png" />
            <h1>Bright</h1>
            <span class="levels">MaxLevel: 4</span>
            <p class="type">Action, Crime, Fantasy</p>
          </div>

          <p class="text">
            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
            with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
            creatures live side by side with humans. A human cop is forced
            to work with an Orc to find a weapon everyone is prepared to kill for.
          </p>

          <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
              <li class="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li class="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            <p class="no-comment">No comments.</p>
          </div>

          <div class="buttons">
            <a href="#" class="button">Edit</a>
            <a href="#" class="button">Delete</a>
          </div>
        </div>

        <article class="create-comment">
          <label>Add new comment:</label>
          <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>

      </section> */}
    </div>
  );
}

export default App;
