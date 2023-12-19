import React from 'react'

const Counter = ({count,changeHandeler}) => {
const incr = ()=>{
    changeHandeler(prevCount =>prevCount+1)
};
const decr = ()=>{
    changeHandeler(prevCount =>prevCount-1)
};

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={incr}>Increment</button>
        <button onClick={decr}>Decrement</button>
    </div>
  )
}

export default Counter