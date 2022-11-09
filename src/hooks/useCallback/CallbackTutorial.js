import React, { useCallback, useState } from 'react'
import Child from './Child';

const CallbackTutorial = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hello World");
    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);
    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={
                () => {
                    setToggle(!toggle)
                }
            }>Toggle</button>
            { toggle && (<p>{data}</p>)}
        </div>
    )
}

export default CallbackTutorial