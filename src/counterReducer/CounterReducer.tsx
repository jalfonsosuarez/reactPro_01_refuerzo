import { useReducer } from 'react';
import { CounterState } from './interfaces/counter.interfaces';
import { counterReducer } from './state/counterReducer';
import * as CounterActions from './actions/counter.actions';


const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

export const CounteReducerComponent = () => {

    const [ counterState, dispatch] = useReducer( counterReducer, INITIAL_STATE )

    const onReset = () => {
        dispatch( CounterActions.doReset() );
    };

    const increaseBy = ( value: number ) => {
        dispatch( CounterActions.doIncreaseBy( value ) );
    };

    return (
        <>
            <h1>Counter Reducer Segment: { counterState.counter }</h1>
            <pre>
                { JSON.stringify( counterState, null, 2 ) }
            </pre>
            <button onClick={ () => onReset() }>Reset</button>
            <button onClick={ () => increaseBy( 1 ) }>+1</button>
            <button onClick={ () => increaseBy( 5 ) }>+5</button>
            <button onClick={ () => increaseBy( 10 ) }>+10</button>
        </>
    )
}
