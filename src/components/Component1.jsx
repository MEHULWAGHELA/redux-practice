import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../redux/action/action'

const Component1 = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(state)
    return (
        <>
            <div>Component1</div>
            <h1>{state.counter.count}</h1>
            <button onClick={() => incrementCount(dispatch)}>Increment</button>
            <button onClick={() => decrementCount(dispatch)}>Decrement</button>
        </>
    )
}

export default Component1
