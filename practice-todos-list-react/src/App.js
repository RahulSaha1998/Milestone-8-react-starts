import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadList></LoadList>
    </div>
  );
}


function LoadList(){
  const [lists, setLists] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setLists(data))
  },[])
  return(
    <div className='lists'>
      <h1>Hello there!</h1>
      <h3>Total Data: {lists.length}</h3>
      {
        lists.map(list => <List id={list.id} title={list.title}></List>)
      }
    </div>
  )
  }

  function List(props){
    return(
      <div className='list'>
        <h3>id: {props.id}</h3>
        <h3>Title: {props.title}</h3>
      </div>
    )
  }

export default App;
