import React, {useEffect, useState, useMemo} from 'react'
import axios from 'axios'

const Memotutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then( (response) => {
        setData(response.data)
      })
  }, []);

  const findLongestName = (comments) => {
    if(!comments) return 'hasan';
    let longestName = '';
    for(let i=0; i < comments.length; i++){
      let currentName = comments[i].name;
      if(currentName.length > longestName.length){
        longestName = currentName;
      }
    }

    console.log("This was computed");

    return longestName;

  }

  const getLongestName = useMemo(() => 
    findLongestName(data), [toggle]
  );

  return (
    <div>
      <div> {getLongestName} </div>
      <button onClick={() => {
        setToggle(!toggle)
      }}>Toggle</button>
      { toggle && <p>Toggle</p>}
    </div>
  )
}

export default Memotutorial;