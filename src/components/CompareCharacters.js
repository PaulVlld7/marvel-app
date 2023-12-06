function CompareCharacters({ character = {} }) {
    return (
        <div>
            {
                // if character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
        </div>
    );
}

export default CompareCharacters;