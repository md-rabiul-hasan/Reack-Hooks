import React,{ useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type){
        case 'increment':
            return {
                counter: state.counter + 1,
                showText: state.showText
            }
        case 'texttoggle':
            return {
                showText: !state.showText,
                counter: state.counter
            }
        default:
            return state;
    }
}

const ReducerTutorial = () => {
    const initialState = {
        counter: 0,
        showText: true
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{state.counter}</p>
            { state.showText && (<p>Hasan</p>)}
            <button onClick={ () => {
                dispatch({ type: 'increment'})
            }}>Increment</button>
            <button  onClick={ () => {
                dispatch({ type: 'texttoggle'})
            }}>Text Toggle</button>
        </div>
    );
}

export default ReducerTutorial;