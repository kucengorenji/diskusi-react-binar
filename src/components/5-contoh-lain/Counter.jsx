import {useState} from 'react';

const Counter = () => {
    const [angka, setAngka] = useState(0);

    const handleIncrease = () => {
        setAngka(angka + 1)
    }

    const handleDecrease = () => {
        setAngka(angka - 1)
    }

    return (
        <>
            <div>angka ini tiap diklik bakal nambah/kurang satu : {angka}</div>
            <button onClick={handleIncrease}>klik untuk nambahin angka</button>
            <button onClick={handleDecrease}>klik untuk ngurangin angka</button>
        </>
    )
}

export default Counter;