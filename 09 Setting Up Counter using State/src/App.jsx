import React, {useState} from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count,setCount] = useState(0)
    function increment(){
        setCount(count => count+1)
    }
    function decrement(){
        setCount(count => count-1)
    }
    return (
        <div className="counter">
            <button onClick={decrement} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={increment} className="counter--plus">+</button>
        </div>
    )
}
