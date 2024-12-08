import React, { useRef, useState } from 'react'

const Stopwatch = () => {

    const [count ,setCount] = useState(0);
    const timer = useRef();

    const startTimer = () =>{
        timer.current = setInterval(()=>{
            setCount(count => count+1)
        },1000)
    }

    const stopTimer =()=>{
        clearInterval(timer.current);
    }
  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <h1>{count}</h1>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Stopwatch
