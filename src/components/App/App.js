import './App.css';
import React, { useEffect, useState } from 'react';
import { getTricks } from '../../apiCalls';


function App() {
  
  const [tricks, setTricks ] = useState([])

  useEffect(() => {
    getTricks().then(data => {
      console.log(data)
    })
  }, [])



  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
