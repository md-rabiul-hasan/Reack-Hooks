import React, {useState} from 'react'
const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');
    const increment = () => {
        setCounter(counter+1);
    }
    const formfiller = (event) => {
        setValue(event.target.value);
    }
    return (
        <div>
            <p>{counter}</p>
            <p>{value}</p>
            <button onClick={increment}>Increment</button>
            <input type="text" onChange={formfiller} />
        </div>
    );
}

export default StateTutorial;