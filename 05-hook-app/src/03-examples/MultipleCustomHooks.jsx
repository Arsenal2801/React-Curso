import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {


    const { counter, increment, reset, decrement } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data, isLoading, hasError)

    const { author, quote } = !!data && data[0]




    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (<LoadingQuote/>) : (<Quote author={author} quote={quote}/>)
            }

            <button disabled={isLoading} onClick={decrement} className='btn btn-primary'>Previous Quote</button>

            <button disabled={isLoading} onClick={reset} className='btn btn-primary'>Reset Quote</button>

            <button disabled={isLoading} onClick={increment} className='btn btn-primary'>Next Quote</button>



        </>
    )
}
