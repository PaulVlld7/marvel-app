function Image({character}) {

    const lien = character.thumbnail.path
    const extension = character.thumbnail.extension
    const cheminImage = `${lien}/standard_large.${extension}`;
    return (
        <div>
            <img src={cheminImage} alt="Image"/>
        </div>
    );
  }

export default Image;  