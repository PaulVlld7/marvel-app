import { userLoadData } from "react-router-dom";
import Count from "../components/Count";
import List from "../components/List";
import Title from "../components/Title";

const characters = require('../data/characters.json');
function CharactersPage() {

   
    // const characters = userLoadData

    return (
        <div>
            <Title></Title>
            <List characters={characters} />
            <Count characters={characters} />
        </div>
    )


}

export default CharactersPage