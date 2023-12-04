import { Link } from "react-router-dom";
import { useState } from "react";

export function CharactersList({ characters = [] }) {
    const [sortType, setSortType] = useState('name');
    const [order, setOrder] = useState('asc');

    const sortedCharacters = [...characters].sort((a, b) => {
        let comparison = 0;

        if (sortType === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (sortType === 'date') {
            comparison = new Date(a.modified) - new Date(b.modified);
        }

        return order === 'asc' ? comparison : -comparison;
    });

    return (
        <div>
            <select onChange={(e) => setSortType(e.target.value)}>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </select>

            <select onChange={(e) => setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>

            <ul id="characters">
                {sortedCharacters.map((character) => {
                    // Create a new Date object from character.modified
                    let modifiedDate = new Date(character.modified);

                    // Format the date as "Month Day, Year"
                    let formattedDate = modifiedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

                    return (
                        <li key={character.id}>
                            <Link to={`/characters/${character.id}`}>
                                <strong>{character.name}</strong>
                            </Link>
                            {" - "}
                            <Link to={`/characters/${character.id}`}>
                                {formattedDate}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}