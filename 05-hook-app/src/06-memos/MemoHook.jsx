import { useState } from "react"
import { useCounter } from "../hooks"



export const MemoHook = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />
            <button className="btn btn-primary" onClick={increment} >Increment</button>
            <button className="btn btn-primary" onClick={()=> setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
