import React, { useState } from 'react';
import logo from './logo.svg';
import fire from './fire-fire-bird.gif';
import './App.css';

function FavoriteCharacterInput() {
    const [favoriteCharacter, setFavoriteCharacter] = useState('');

    const handleChange = (event) => {
        setFavoriteCharacter(event.target.value);
    };

    return (
        <div>
            <label htmlFor="favorite-character">
                Who is your favorite character?
            </label>
            <select
                id="favorite-character"
                value={favoriteCharacter}
                onChange={handleChange}

            >
                <option value="">Select your favorite character</option>
                <option value="Dream Phoenix">Dream Phoenix</option>
                <option value="Aerik">Aerik</option>
                <option value="Kree">Kree</option>
                <option value="Svareg">Svareg</option>
                <option value="Oncith">Oncith</option>
                <option value="Tazsael">Tazsael</option>
                <option value="Ember">Ember</option>
                <option value="Kavhand the Shepherd">Kavhand the Shepherd</option>
            </select>
            {favoriteCharacter && (
                <p>
                    Yes! {favoriteCharacter} is a very special character!

                </p>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={fire} alt="Ember" />
                <p>
                    Welcome to my D&D app! The fun is just beginning...
                </p>
                <a
                    className="App-link"
                    href="https://www.dndbeyond.com/monsters/17074-young-red-dragon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ember is the Greatest D&D Character of All Time!
                </a>

                <FavoriteCharacterInput />
            </header>
        </div>
    );
}

export default App;
