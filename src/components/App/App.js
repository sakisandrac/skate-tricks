import './App.css';
import React, { useEffect, useState } from 'react';
import { getTricks } from '../../apiCalls';
import Card from '../Card/Card';


function App() {
  
  const [tricks, setTricks ] = useState([]);

  useEffect(() => {
    getTricks().then(data => {
      console.log(data)
      setTricks(data)
    })
  }, [])

  const renderTrickCards = () => {
    return tricks.map(trick => <Card key={trick.id} trick={trick}/>)
  }


  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <div className='cards-container'>
        {renderTrickCards()}
      </div>
    </div>
  );
}

export default App; 
