import { Link } from "react-router-dom";

function List({characters}) {
  if(characters.length === 0){
    return ("Il n'y pas de personnages dans la liste.")
  }
  else{
      const characterList = characters.map((character,index)=>(
      <li key={index}>{character.name}</li>
      ))
      return (
        <div>
          <h2>Liste des personnages :</h2>
            <ul><Link to="/characters">{characterList}</Link></ul>
        </div>
      );
    }
  }

export default List;  