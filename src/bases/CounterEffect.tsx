import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState( 5);

    const counterElement = useRef<HTMLHeadingElement>( null );

    const handleClick = ( numero: number ) => {
            setCounter( prev => Math.min( prev + numero, MAXIMUN_COUNT ) );
    }

    useEffect(() => {

        if ( counter < 10 ) { return; }
        
        console.log('%cValor máximo alcanzado', 'color: red; background-color: black');

        const tl = gsap.timeline();

        tl.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
            .to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } );

        // gsap.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
        //     .then( () => {
        //         gsap.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' } )
        //     });

    }, [counter])

    return (
        <>
            <h1>Counter Effect: </h1>
            <h2 ref={ counterElement }>{ counter }</h2>

            <button onClick={ () => handleClick(1) }>
                +1
            </button>
        </>
    )
}
