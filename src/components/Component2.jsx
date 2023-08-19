import React from 'react'
import { useSelector } from 'react-redux'

const Component2 = () => {
    let state = useSelector((state) => state)
    return (
        <div>
            <h1>{state.counter.count}</h1>
            <div>Component2</div>
        </div>
    )
}

export default Component2
