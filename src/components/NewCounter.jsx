import React from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}
function NewCounter(props) {
    //usereducer() - is used to manage the state where data is complex
    const [state, dispatch] = useReducer(reducer,0);

    return (
        <div className='py-3 text-center'>
            <p>Use Reducer Hook</p>
            <h1>{state}</h1>
        </div>
    );
}

export default NewCounter;