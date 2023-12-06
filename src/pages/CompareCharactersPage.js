import React from 'react';
import CharactersData from '../data/characters.json';
import CompareCharacters from '../components/CompareCharacters';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // to be replaced with the real data
    const characters = CharactersData

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        display:'flex',
        flex_direction: 'row',
        width: 500,
    };

    const data = Object.keys(characters[option1.value].capacities).map(key => ({
        capacity: key,
        [characters[option1.value].name]: characters[option1.value].capacities[key],
        [characters[option2.value].name]: characters[option2.value].capacities[key]
    }));

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <p style={centerStyle}>
                {characters[option1.value].name} vs {characters[option2.value].name}
            </p>
            <p style={centerStyle}>
            <CompareCharacters character={characters[option1.value]} />
            <CompareCharacters character={characters[option2.value]} />
            </p>

            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="capacity" />
                <PolarRadiusAxis />
                <Radar name={characters[option1.value].name} dataKey={characters[option1.value].name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={characters[option2.value].name} dataKey={characters[option2.value].name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
        </>
    );
};

export default CompareCharactersPage;