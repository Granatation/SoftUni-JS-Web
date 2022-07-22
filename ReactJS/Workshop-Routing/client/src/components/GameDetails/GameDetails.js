export const GameDetails = () => {
    return (
        <section id="game-details">
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

        </section>
    );
}