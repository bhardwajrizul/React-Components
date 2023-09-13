// import { useState } from 'react'
import  { produce }  from 'immer';

import { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'increment';
const CHANGE_INPUT_VALUE = 'change-value-input'
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add-value-to-count'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1
            return 
        case CHANGE_INPUT_VALUE:
            state.value = action.payload
            return 
        case DECREMENT_COUNT:
            state.count = state.count - 1
            return 
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.value
            state.value = 0
            return 
        default:
            return state
    }
};

function CounterPage( {initialCount} ) {
    // const [count, setCount] = useState(initialCount);
    // const [value, setValue] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        value: 0
    })

    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    }
    const decrement = () => {
        // setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT
        })
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValue(value);
        dispatch({
            type: CHANGE_INPUT_VALUE,
            payload: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + value)
        // setValue(0)
        dispatch({
            type: ADD_VALUE_TO_COUNT
        })
    }

    return (
        <Panel className='m-3'>
            <h1 className='text=lg'> Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input value={state.value || ''} onChange={handleChange} type='number' className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;