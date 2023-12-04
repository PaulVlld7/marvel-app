function CharacterDetail({ character = {} }) {
    // Create a new Date object from character.modified
    let modifiedDate = new Date(character.modified);

    // Format the date as "Month Day, Year"
    let formattedDate = modifiedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div>
            <h2>{character.name}</h2>
            {
                // if character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <p>{formattedDate}</p>
        </div>
    );
}

export default CharacterDetail;