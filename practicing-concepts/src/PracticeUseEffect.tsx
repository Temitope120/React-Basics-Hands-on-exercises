import {useEffect, useState} from 'react';

export default function PracticeUseEffect() {
    const [starWarsData, setStarWarsData] = useState<any[]>([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${count}`).then(
            res => res.json().then(data => {
                setStarWarsData(data);
            })
        )
    }, [count])

    return (
        <>
            <div>
                <h2> Practicing UseEffect Dependency Array: The count is {count}</h2>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
                <pre> {JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
        </>
    )
}