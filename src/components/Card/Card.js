import React from 'react';
import './Card.css';

const Card = ({trick}) => {

  const capitalizeWord = (word) => {
    return word[0].toUpperCase()+word.substring(1)
  } 
  
  return (
    <div className='card-container'>
      <p>{capitalizeWord(trick.stance)} {capitalizeWord(trick.name)}</p>
      <p>Obstacle: {capitalizeWord(trick.obstacle)}</p>
      <p>Link to Tutorial: <a href={trick.tutorial}>{trick.tutorial}</a></p>
    </div>
  )
}

export default Card