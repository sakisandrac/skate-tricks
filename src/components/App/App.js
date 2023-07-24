import './App.css';
import React, { useEffect, useState } from 'react';
import { getTricks, postTrick } from '../../apiCalls';
import Card from '../Card/Card';
import Form from '../Form/Form';

function App() {
  
  const [tricks, setTricks ] = useState([]);
  const [trickSubmitted, setTrickSubmitted] = useState(false)

  useEffect(() => {
    getTricks().then(data => {
      console.log(data)
      setTricks(data)
    })
  }, [trickSubmitted])

  const renderTrickCards = () => {
    return tricks.map(trick => <Card key={trick.id} trick={trick}/>)
  }

  const addTrick = (newTrick) => {
    const trick = {stance: newTrick.stance, name: newTrick.name, obstacle: newTrick.obstacle, tutorial: newTrick.tutorial}
    postTrick(trick).then(data => {
      console.log(data)
      setTrickSubmitted(prev => !prev)
    })
    
  }

  useEffect(() => {
    console.log(tricks)
    console.log(tricks)
  }, [tricks, trickSubmitted])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <div className='form-container'>
        <Form addTrick={addTrick}/>
      </div>
      <div className='cards-container'>
        {renderTrickCards()}
      </div>
    </div>
  );
}

export default App; 
