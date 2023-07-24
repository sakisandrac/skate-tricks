import React, { useEffect, useState } from 'react';
import './Form.css'

const Form = ({ addTrick }) => {

  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [link, setLink] = useState("");
  
  const handleChange = (e) => {
    const {value, name} = e.target
    if (name === 'stance') {
      setStance(value)
    }

    if (name === 'name') {
      setName(value)
    }

    if (name === 'obstacle') {
      setObstacle(value)
    }

    if (name === 'link') {
      setLink(value)
    }
  }
  
  const submitTrick =(e) => {
    e.preventDefault();
    const newTrick = {
      id: Date.now(),
      name: name,
      obstacle: obstacle,
      stance: stance,
      tutorial: link
    }

    addTrick(newTrick)
  
  }

  return (
    <div className='form'>
      <form>
          <select name="stance" onChange={(e) => {handleChange(e)}}>
            <option value="">Choose Your Stance</option>
            <option value="regular">Regular</option>
            <option value="switch">Switch</option>
          </select>
          <input type="text" name='name' placeholder='Name of Trick' value={name} onChange={(e) => {handleChange(e)}}/>
          <select name="obstacle" onChange={(e) => {handleChange(e)}}>
            <option value="">Choose Your Obstacle</option>
            <option value="flatground">Flatground</option>
            <option value="ledge">Ledge</option>
            <option value="rail">Rail</option>
            <option value="stairs">Stairs</option>
            <option value="pool">Pool</option>
          </select>
          <input type='text' name='link' placeholder='Link to Tutorial' value={link} onChange={(e) => {handleChange(e)}}/>
          <button onClick={(e) => {submitTrick(e)}}>Send it!</button>
        </form>
    </div>
  )
}

export default Form