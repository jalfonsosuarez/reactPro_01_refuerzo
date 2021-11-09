import { CounterAction } from "../actions/counter.actions";
import { CounterState } from "../interfaces/counter.interfaces";



export const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    const { counter, changes } = state; 

    switch (action.type) {
        case 'increaseBy':
            return {
                previous: counter,
                counter: counter + action.payload.value,
                changes: changes + 1,
            }
        
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0,
            };
    
        default:
            return state;
    }
};
