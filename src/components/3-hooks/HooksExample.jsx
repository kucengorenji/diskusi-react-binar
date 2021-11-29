import {useState, useEffect} from 'react';

const HooksExample = () => {
    const [state, setState] = useState('nilai awal');

    const handleClick = () => {
        setState("nilai terbaru");
    };

    useEffect(() => {
        console.log("hello world, ini akibat useEffect");
    }, [])

    return (
        <>
            <h1>hello kawan2 ini component yang memakai state {state}</h1>
            <button onClick={handleClick}> tekan untuk merubahnya</button>
        </>
    )
}

export default HooksExample;