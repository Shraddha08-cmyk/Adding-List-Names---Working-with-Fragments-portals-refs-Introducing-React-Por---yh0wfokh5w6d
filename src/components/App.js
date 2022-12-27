import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const[val setValue] = useState("");
  const[list setList] = useState([]);
  const changehandler = (event) => {
    setValue(event.target.value);
  }
  const addhandler = () => {
    setList({...list, val]);
  }
  
  return (
    <div id="main">
       <input id="input" value={val} onChange={} />
      <button id="button" onClick={addhandler}>Click</button>
       <ul id="list">
         
         {list.map((element, index) => {
           return <li className="items" key={element + index} >{element}</li>
         })}
         {/*<List listx={list} />*/}
      </ul>
    </div>
  )
}


export default App;
