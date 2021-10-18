import React, { useState } from 'react';

function App() {

    const [likes, setLikes] = useState(0)
    const [value1, setValue] = useState('ТЕКСТ')
    
    function increment(){
      setLikes(likes + 1)
    }

    function decrement(){
      setLikes(likes - 1)
    }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value1}</h1>
      <input 
        type='text' 
        value={value1}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
    </div>
  );
}

export default App;