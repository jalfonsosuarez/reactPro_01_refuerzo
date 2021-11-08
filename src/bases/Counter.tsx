import { useState } from 'react';


export const Counter = ( { initialValue = 0 } ) => {

    const [counter, setCounter] = useState( initialValue );

    const handleClick = ( numero: number ) => {
        setCounter( prev => prev + numero );
    }

    return (
        <>
            <h1>Counter: { counter }</h1>

            <button onClick={ () => handleClick(1) }>
                +1
            </button>
        </>
    )
}
