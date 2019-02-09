import React, { useState } from 'react';
import './App.css';

function List(props){
  
    function addHandler(){
      props.estado( props.count + parseInt(numero));
    }
  const [numero, setNumero] = useState(0);

  return (
      <React.Fragment>
          <input type="number" value={numero} onChange={e=>setNumero(e.target.value)} ></input>
          <button type="button" onClick={addHandler}>GO</button>
      </React.Fragment>
  );
}

 function App () {
  const [count, setCount] = useState(0);
    return (
        <div className="App">
            <h2>Principal {count}</h2>
            <List count={count} estado={setCount}></List>
        </div>
    );
}

export default App;
