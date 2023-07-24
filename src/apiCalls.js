const getTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .catch(err => {
      console.log(err)
      throw new Error(`Error ${err.statusText}`)
    })
};

export {getTricks}