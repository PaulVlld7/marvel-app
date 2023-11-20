<<<<<<< HEAD
import { Link } from "react-router-dom";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        {character.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
=======
export function CharactersList({ characters }) {
    return (
      <ul id="characters">
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    );
  }
>>>>>>> 1f124a4514f449bdbb94bcc8f9e7ca35f6538712
