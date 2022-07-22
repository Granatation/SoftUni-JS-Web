import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'

import './App.css';

function App() {
  return (
    <div id="box">

      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </main>

      {/* <section id="login-page" class="auth">
        <form id="login">

          <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" />
            <input type="submit" class="btn submit" value="Login" />
            <p class="field">
              <span>If you don't have profile click <a href="#">here</a></span>
            </p>
          </div>
        </form>
      </section> */}

      {/* <section id="register-page" class="content auth">
        <form id="register">
          <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com" />

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password" />

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password" />

            <input class="btn submit" type="submit" value="Register" />

            <p class="field">
              <span>If you already have profile click <a href="#">here</a></span>
            </p>
          </div>
        </form>
      </section> */}

      {/* <section id="create-page" class="auth">
        <form id="create">
          <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title..." />

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category..." />

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game" />
          </div>
        </form>
      </section> */}

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

      {/* <section id="catalog-page">
        <h1>All Games</h1>
        <div class="allGames">
          <div class="allGames-info">
            <img src="./images/avatar-1.jpg" />
            <h6>Action</h6>
            <h2>Cover Fire</h2>
            <a href="#" class="details-button">Details</a>
          </div>

        </div>
        <div class="allGames">
          <div class="allGames-info">
            <img src="./images/avatar-1.jpg" />
            <h6>Action</h6>
            <h2>Zombie lang</h2>
            <a href="#" class="details-button">Details</a>
          </div>

        </div>
        <div class="allGames">
          <div class="allGames-info">
            <img src="./images/avatar-1.jpg" />
            <h6>Action</h6>
            <h2>MineCraft</h2>
            <a href="#" class="details-button">Details</a>
          </div>
        </div>

        <h3 class="no-articles">No articles yet</h3>
      </section> */}
    </div>
  );
}

export default App;
