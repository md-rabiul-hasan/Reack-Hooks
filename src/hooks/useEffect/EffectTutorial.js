import React,{ useEffect, useState } from 'react'
import axios from 'axios'

const EffectTutorial = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (response) => {
               setData(response);
               console.log("API called")
               console.log(data)
            })
    }, []);
    return (
        <div>EffectTutorial</div>
    )
}

export default EffectTutorial;
