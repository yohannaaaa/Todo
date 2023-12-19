import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './TodoList'
import './App.css'
import  './greeting.css'

import Greeting from './Greeting'
import Child from './Child'
import Counter from './counter'

const App = () => {
const [num, setNum] = useState(1);

const GenerateRandomNumber =() => {
  let val = Math.floor(Math.random()* 100 +1)
  setNum(val)
}

return(
  <div className="todo-item">
  
  <h1>ToDo List </h1>
      <TodoList />
  </div>
    
  

);
};


export default App;
