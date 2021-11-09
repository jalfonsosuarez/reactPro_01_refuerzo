import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from 'gsap';

export const useCounter = ( { maxCount = 10 }) => {

    const [counter, setCounter] = useState( 5 );

    const elementToAnimate = useRef<any>( null );

    const handleClick = ( numero: number ) => {
            setCounter( prev => Math.min( prev + numero, maxCount ) );
    }

    const tl = useRef( gsap.timeline() );

    useLayoutEffect(() => {

        if ( !elementToAnimate.current ) { return };

        tl.current.to( elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
                    .to( elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' } )
                    .pause();

    }, [])

    useEffect(() => {

        // if ( counter < maxCount ) { return; }

        tl.current.play(0);

    }, [counter])    

    return {
        counter,
        elementToAnimate,
        handleClick
    };
}