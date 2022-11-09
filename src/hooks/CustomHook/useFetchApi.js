import React,{ useState, useEffect } from 'react'
import axios from 'axios';

const useFetchApi = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            })
    }, [url]);

    return data;
}

export default useFetchApi