import React, { useRef } from 'react'

const RefTutorial = () => {
    const nameHandler = useRef(null);

    const formSubmit = () => {
        if(nameHandler.current.value == ''){
            nameHandler.current.focus()
        }
    }

    return (
        <div>
            <input type="text" placeholder="your name" ref={nameHandler} />
            <button onClick={formSubmit}>Submit</button>
        </div>
    )
}

export default RefTutorial;