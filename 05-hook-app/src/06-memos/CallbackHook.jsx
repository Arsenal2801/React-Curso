import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        (param = 1) => {
            setCounter((value) => value + param)
        },
        [],
    )


    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>useCallbackHook: {counter} </h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
