import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [carregou, setCarregou] = useState(false);
  const [pessoas, setPessoas] = useState([]);
  const [count, setCount] = useState(1);
  const [listPages,setListPage] = useState([1,2,3,4]);
  useEffect(() => {
    personHandler(count);
  }, []);

  function personHandler(position) {
    setCarregou(false);
    setCount(position);
    fetch("https://reqres.in/api/users?page=" + position)
      .then(response => response.json())
      .then(data => {
        setPessoas(data.data);
        setCarregou(true);
      });
  }

  if (!carregou) {
    return (
      <div className="mt-5 text-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {pessoas.map((p) =>
              <tr key={p.id}>
                <th>{p.id}</th>
                <td>{p.first_name}</td>
                <td>{p.last_name}</td>
                <td><img src={p.avatar} alt={"avatar_" + p.id}></img></td>
              </tr>
            )}
          </tbody>
        </table>
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
              {
                listPages.map((l)=>
                count == l ? 
                <li class="page-item active" aria-current="page"><span class="page-link" onClick={() => { personHandler(l) }}> {l}<span class="sr-only">(current)</span></span></li>
                :
                 <li className="page-item"><a className="page-link" href="#" onClick={() => { personHandler(l) }}>{l}</a></li>
                )
              }
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default App;



