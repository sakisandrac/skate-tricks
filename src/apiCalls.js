const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      throw new Error(`Error ${err.statusText}`)
    })
};

const postTrick = (newTrick) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    body: JSON.stringify(newTrick),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(err => {
    console.log(err)
    throw new Error(`Error ${err.statusText}`)
  })
}

export {getTricks, postTrick}