import React, {useState, useEffect} from 'react';

export default function MemeGenerator() {
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'https://i.imgflip.com/1bij.jpg',
})
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res => res.json()).then(res => setAllMemes(res.data.memes))
    }, [])

    function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = event.currentTarget;
        console.log(name, value)
    }

    return (
        <>
            <div>
                <nav>
                    <h1>
                        Meme Generator
                    </h1>
                </nav>

                <form>
                    <label>
                        <input onChange={handleInputChange} type="text" value='One does not simply' name="inputOne"/>
                    </label>

                    <label>
                        <input onChange={handleInputChange} type="text" value='Walk into mordor' name="inputTwo" />
                    </label>
                    <button> Get a New Meme Image</button>
                </form>

                <img src={meme.imageUrl} alt="meme image" />

            </div>
            <br/> <br/> <br/>
            {/*{allMemes.map((item) => {*/}
            {/*   <ul>*/}
            {/*       <li key={item.id}> {item}</li>*/}
            {/*   </ul>*/}
            {/*})}*/}
        </>
    )
}