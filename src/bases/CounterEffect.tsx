import { useEffect, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState( 5);

    const handleClick = ( numero: number ) => {
            setCounter( prev => Math.min( prev + numero, MAXIMUN_COUNT ) );
    }

    useEffect(() => {

        if ( counter < 10 ) { return; }
        
        console.log('%cValor máximo alcanzado', 'color: red; background-color: black');

    }, [counter])

    return (
        <>
            <h1>Counter Effect: { counter }</h1>

            <button onClick={ () => handleClick(1) }>
                +1
            </button>
        </>
    )
}
