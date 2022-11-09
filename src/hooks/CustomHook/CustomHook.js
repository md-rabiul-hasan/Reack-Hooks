import React from 'react'
import useFetchApi from './useFetchApi'

const CustomHook = () => {
    const data = useFetchApi('https://jsonplaceholder.typicode.com/posts/1');
    console.log(data);
    

    return (
        <div>
            {data && (<p>{data.title}</p>)}
            <p>Custom Hook</p>
        </div>
    )
}

export default CustomHook