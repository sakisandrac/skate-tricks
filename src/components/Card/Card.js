import React from 'react';
import './Card.css';

const Card = ({trick}) => {

  return (
    <div className='card-container'>
      <p>{trick.stance} {trick.name}</p>
      <p>{trick.obstacle}</p>
      <p>Link to Tutorial: <a href={trick.tutorial}>{trick.tutorial}</a></p>
    </div>
  )
}

export default Card