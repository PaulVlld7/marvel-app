import { Link, useLoaderData } from "react-router-dom";

function ListeCharacters(){
    const characterList = useLoaderData();
    return(
      <div>
        <ul>
          {characters.map((character) =>
          <li
          key={character.id}
          >
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
          )}
        </ul>
      </div>
    )
  
  }

  export default ListeCharacters