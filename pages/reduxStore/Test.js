import { Text } from 'react-native'
import { createStore } from 'redux'
import React from 'react';

// Define action types
const types = {
    INCREMENT: 'INCREMENT',
}

// Define a reducer
const reducer = (state, action) => {
    console.log('reducer()'  )
    if (action.type === types.INCREMENT) {
        console.log(state.count + 3)
        return {count: state.count + 3}
    }
    return state
}

// Define the initial state of our store
const initialState = {count: 0}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)

/// We're done! Redux is all set up. Here's how we can use it:


// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})

// Calling `store.getState()` returns our state object
export default function App() {
    console.log('App()')
    return (
        <Text style={{fontSize: 100}}>
            {store.getState().count}
        </Text>
    )
}
